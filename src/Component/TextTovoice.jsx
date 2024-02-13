import React, { useState, useEffect } from 'react';
import { FaCirclePlay } from "react-icons/fa6";

const TextToVoice = () => {
    const [text, setText] = useState('');
    const [voices, setVoices] = useState([]);
    const [selectedVoiceIndex, setSelectedVoiceIndex] = useState(0);

    useEffect(() => {
        const fetchVoices = () => {
            const availableVoices = window.speechSynthesis.getVoices();
            setVoices(availableVoices);
        };

        // Fetch voices initially and subscribe to voiceschanged event
        fetchVoices();
        window.speechSynthesis.addEventListener('voiceschanged', fetchVoices);

        // Cleanup event listener
        return () => {
            window.speechSynthesis.removeEventListener('voiceschanged', fetchVoices);
        };
    }, []);

    const handleVoiceChange = (event) => {
        setSelectedVoiceIndex(parseInt(event.target.value, 10));
    };

    const handleButtonClick = () => {
        const speech = new SpeechSynthesisUtterance();
        speech.text = text;
        speech.voice = voices[selectedVoiceIndex];
        window.speechSynthesis.speak(speech);
    };

    const handleTextareaChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <div className='h-screen flex justify-center items-center bg-[#010758]'>
                <div>
                    <h1 className='text-white text-[45px] mb-[30px]'>Text to Speech Converter</h1>
                    <textarea
                        className='w-[600px] h-[250px] bg-[#403d84] p-[20px] text-[15px] rounded-xl border-0 mb-[30px] resize-none outline-0 text-white'
                        placeholder='Type something...'
                        value={text}
                        onChange={handleTextareaChange}
                        cols="30"
                        rows="10"
                    ></textarea>
                    <div className='flex gap-[20px]'>
                        <select
                            className='flex-1 w-[400px] text-white h-[50px] outline-0 border-0 rounded-full bg-[#403d84] p-[8px]'
                            onChange={handleVoiceChange}
                            value={selectedVoiceIndex}
                        >
                            {voices.map((voice, index) => (
                                <option key={index} value={index}>{voice.name}</option>
                            ))}
                        </select>
                        <button
                            className='bg-blue-600 w-[130px] h-[50px] text-[20px] flex items-center text-white rounded-full'
                            onClick={handleButtonClick}
                        >
                            <FaCirclePlay className='m-[10px] text-[30px]' />Listen
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextToVoice

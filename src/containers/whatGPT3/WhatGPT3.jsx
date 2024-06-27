import React from 'react'
import './WhatGPT3.css'
import Feature from '../../components/feature/Feature'




const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 sectionn__margin ' id='wgpt3'>
      <div className="gpt3__whatgpt3-feature">

        <Feature title="What is GPT3?" text="Generative Pre-trained Transformer 3 (GPT-3) is a large language model released by OpenAI in 2020. Like its predecessor GPT-2, it is a decoder-only transformer model of deep neural network, which uses attention in place of previous recurrence- and convolution-based architectures"/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The Possibilities Are Beyond Your Imagination</h1>
        <p>Explore The Library</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="A chatbot is a computer program that simulates human conversation through voice commands or text chats or both. Chatbot, short for chatterbot, is an artificial intelligence(AI) feature that can be embedded and used through any major messaging application."/>
        <Feature title="Knowledgebase" text="This article is about the importance of having a knowledge base in an organization. It explains what a knowledge base is, how it can be structured and used, and why organizations need one." />
        <Feature title="Education" text="Education is a discipline that is concerned with methods of teaching and learning in schools or school-like environments as opposed to various nonformal and informal means of socialization (e.g., rural development projects and education through parent-child relationships)." />
      </div>

    </div>
  )
}

export default WhatGPT3
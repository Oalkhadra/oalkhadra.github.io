{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', () => \{\
    // Get all buttons and content sections\
    const tabButtons = document.querySelectorAll('.tab-button');\
    const tabContents = document.querySelectorAll('.tab-content');\
\
    // Add click event listener to each button\
    tabButtons.forEach(button => \{\
        button.addEventListener('click', () => \{\
            // Remove active class from all buttons and content\
            tabButtons.forEach(btn => btn.classList.remove('active'));\
            tabContents.forEach(content => content.classList.remove('active'));\
\
            // Add active class to clicked button and corresponding content\
            button.classList.add('active');\
            const tabId = button.getAttribute('data-tab');\
            document.getElementById(tabId).classList.add('active');\
        \});\
    \});\
\});}
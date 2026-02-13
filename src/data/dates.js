import firstDate1 from '../assets/first_date_1.jpg';
import firstDate2 from '../assets/first_date_2.jpg';
import firstDate3 from '../assets/first_date_3.jpg';
import firstDate4 from '../assets/first_date_4.jpg';
import firstDateVideo from '../assets/first_date.mp4';

import secondDate1 from '../assets/second_date_1.jpg';
import secondDate2 from '../assets/second_date_2.jpg';
import secondDate3 from '../assets/second_date_3.jpg';
import secondDate4 from '../assets/second_date_4.jpg';
import secondDateVideo from '../assets/second_date.mp4';

import thirdDate1 from '../assets/third_date_1.jpg';
import thirdDate2 from '../assets/third_date_2.jpg';
import thirdDate3 from '../assets/third_date_3.jpg';
import thirdDate4 from '../assets/third_date_4.jpg';
import thirdDateVideo from '../assets/third_date.mp4';

import fourthDate1 from '../assets/fourth_date_1.jpg';
import fourthDate2 from '../assets/fourth_date_2.jpg';
import fourthDate3 from '../assets/fourth_date_3.jpg';
import fourthDate4 from '../assets/fourth_date_4.jpg';
import fourthDateVideo from '../assets/fourth_date.mp4';

import fifthDate1 from '../assets/fifth_date_1.jpg';
import fifthDate2 from '../assets/fifth_date_2.jpg';
import fifthDate3 from '../assets/fifth_date_3.jpg';
import fifthDate4 from '../assets/fifth_date_4.jpg';
import fifthDateVideo from '../assets/fifth_date.mp4';

import sixthDate1 from '../assets/sixth_date_1.jpg';
import sixthDate2 from '../assets/sixth_date_2.jpg';
import sixthDate3 from '../assets/sixth_date_3.jpg';
import sixthDate4 from '../assets/sixth_date_4.jpg';
import sixthDateVideo from '../assets/sixth_date.mp4';

import seventhDate1 from '../assets/seventh_date_1.jpg';
import seventhDate2 from '../assets/seventh_date_2.jpg';
import seventhDate3 from '../assets/seventh_date_3.jpg';
import seventhDate4 from '../assets/seventh_date_4.jpg';
import seventhDateVideo from '../assets/seventh_date.mp4';

import eighthDate1 from '../assets/eighth_date_1.jpg';
import eighthDate2 from '../assets/eighth_date_2.jpg';
import eighthDate3 from '../assets/eighth_date_3.jpg';
import eighthDate4 from '../assets/eighth_date_4.jpg';
import eighthDateVideo from '../assets/eighth_date.mp4';

import LDR_Moment_1 from '../assets/LDR_Moment_1.png';
import LDR_Moment_2 from '../assets/LDR_Moment_2.png';
import LDR_Moment_3 from '../assets/LDR_Moment_3.png';
import LDR_Moment_4 from '../assets/LDR_Moment_4.png';
import LDR_Moment from '../assets/LDR_Moment.mp4';

export const dates = [
    {
        id: 1,
        title: "The First Date",
        date: "2025-01-30",
        description: "First time at Blok M... I'm not gonna lie, my hands were actually shaking! But then I saw you looking absolutely stunning and surprisingly calm. You were exactly the same person I fell for in our chats: soft-spoken, sweet, and real.",
        image: firstDate1,
        video: firstDateVideo, // Main video replaces image
        gallery: [
            { type: 'image', src: firstDate1, caption: 'First Selfie' },
            { type: 'image', src: firstDate2, caption: 'Mirror Selfie' },
            { type: 'image', src: firstDate3, caption: 'Us' },
            { type: 'image', src: firstDate4, caption: 'Parking Lot' }
        ]
    },
    {
        id: 2,
        title: "Second Date",
        date: "2025-02-13",
        description: "Round two. Honestly? I was still super awkward and shy around you. But you were so attentive and gentle with me, making sure I was okay the whole time. That meant everything.",
        image: secondDate1,
        video: secondDateVideo,
        gallery: [
            { type: 'image', src: secondDate1, caption: 'Moment 1' },
            { type: 'image', src: secondDate2, caption: 'Moment 2' },
            { type: 'image', src: secondDate3, caption: 'Moment 3' },
            { type: 'image', src: secondDate4, caption: 'Moment 4' }
        ]
    },
    {
        id: 3,
        title: "See You Soon",
        date: "2025-02-21",
        description: "The part I hate the most. Saying goodbye at the station never gets easier. Back to long distance and video calls for now, but I know we're stronger than the miles between us",
        image: thirdDate1,
        video: thirdDateVideo,
        gallery: [
            { type: 'image', src: thirdDate1, caption: 'Last Hug' },
            { type: 'image', src: thirdDate2, caption: 'At the Station' },
            { type: 'image', src: thirdDate3, caption: 'Sad Smiles' },
            { type: 'image', src: thirdDate4, caption: 'Promise to return' }
        ]
    },
    {
        id: 4,
        title: "Reunion & Richeese",
        date: "2025-03-17",
        description: "Back in town! You picked me up even though you were fasting (my hero <3) and we went straight for Richeese. Honestly, it was the best meal ever simply because you were sitting across from me.",
        image: fourthDate1,
        video: fourthDateVideo,
        gallery: [
            { type: 'image', src: fourthDate1, caption: 'Reunited' },
            { type: 'image', src: fourthDate2, caption: 'Car Ride' },
            { type: 'image', src: fourthDate3, caption: 'Richeese Date' },
            { type: 'image', src: fourthDate4, caption: 'Happy Again' }
        ]
    },
    {
        id: 5,
        title: "Homecoming",
        date: "2025-04-11",
        description: "Back home again! We didn't do anything fancy, just hung out at the park and mall near my place. Honestly? Simple days like this are my absolute favorite.",
        image: fifthDate1,
        video: fifthDateVideo,
        gallery: [
            { type: 'image', src: fifthDate1, caption: 'Park Walk' },
            { type: 'image', src: fifthDate2, caption: 'Mall Date' },
            { type: 'image', src: fifthDate3, caption: 'Near Home' },
            { type: 'image', src: fifthDate4, caption: 'Quality Time' }
        ]
    },
    {
        id: 6,
        title: "Deep Talks",
        date: "2025-04-13",
        description: "We found a quiet little spot and just... talked. About life, about us, about everything. It felt like we unlocked a whole new level of closeness today.",
        image: sixthDate1,
        video: sixthDateVideo,
        gallery: [
            { type: 'image', src: sixthDate1, caption: 'Deep Talk' },
            { type: 'image', src: sixthDate2, caption: 'Meaningful Moment' },
            { type: 'image', src: sixthDate3, caption: 'Just Us' },
            { type: 'image', src: sixthDate4, caption: 'Unforgettable' }
        ]
    },
    {
        id: 7,
        title: "Late Night Runs",
        date: "2025-07-12",
        description: "You picked me up from Jogja and I immediately dragged us to Family Mart because I was absolutely starving. We ended up just chilling at the park until way too late. Honestly? Totally worth it.",
        image: seventhDate1,
        video: seventhDateVideo,
        gallery: [
            { type: 'image', src: seventhDate1, caption: 'Family Mart Date' },
            { type: 'image', src: seventhDate2, caption: 'Night Park' },
            { type: 'image', src: seventhDate3, caption: 'Deep Talks' },
            { type: 'image', src: seventhDate4, caption: 'Together Again' }
        ]
    },
    {
        id: 8,
        title: "Blok M Again",
        date: "2025-08-08",
        description: "Spent the ENTIRE day at Blok M! We explored every single corner, definitely bought way too much food (oops), and just had the absolute best time. Seriously, one of those core memories.",
        image: eighthDate1,
        video: eighthDateVideo,
        gallery: [
            { type: 'image', src: eighthDate1, caption: 'Exploring' },
            { type: 'image', src: eighthDate2, caption: 'Food Hunt' },
            { type: 'image', src: eighthDate3, caption: 'Happy Us' },
            { type: 'image', src: eighthDate4, caption: 'Blok M Vibes' }
        ]
    },
    {
        id: 9,
        title: "LDR Phase",
        date: "Present",
        description: "Miles apart again. It honestly sucks, I'm not gonna lie. But hey, thank god for video calls. Missing you a little extra today.",
        image: LDR_Moment_1,
        video: LDR_Moment,
        gallery: [
            { type: 'image', src: LDR_Moment_1, caption: 'LDR Moment 1' },
            { type: 'image', src: LDR_Moment_2, caption: 'LDR Moment 2' },
            { type: 'image', src: LDR_Moment_3, caption: 'LDR Moment 3' },
            { type: 'image', src: LDR_Moment_4, caption: 'LDR Moment 4' }
        ]
    }
];

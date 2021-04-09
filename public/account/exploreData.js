const counselors = {
    "alina": {
        name: "Alina Miller",
        license: "LMHC",
        img: "../media/alina-miller.png",
        focus: ["Substance abuse", "Recovery"],
        description: "Alina Miller is a licensed mental health counselor who has worked with many patients and clients in order to lead the road towards recovering from substance abuse, such as opiods and narcotics overdose. She graduated from Capella University with her degree/license in 2006.",
        recommended: true,
        sent: true
    },
    "hazel": {
        name: "Hazel Jones",
        license: "LMHC",
        img: "../media/hazel-jones.png",
        focus: ["Substance abuse", "Recovery", "Mood disorders"],
        description: "Hazel Jones is a licensed mental health counselor who worked with many patients in order to continue being sober and offer medically-sound advice and tips for staying clean. She also specializes in mood disorders, such as clinical depression and bipolar disorder. She graduated from Walden University with her license/degree in 2014.",
        recommended: true
    },
    "paris": {
        name: "Paris Croiss",
        license: "LPC",
        img: "../media/paris-croiss.png",
        focus: ["Anxiety disorders", "Mood disorders"],
        description: "Paris Cross is a licensed professional counselor who has worked with many patients who have anixety disorders, such as post traumatic stress disorder (PTSD), obsessive-compulsive disorder (OCD) and panic disorders. She also specializes in bipolar disorder. She graduated from Auburn University in 2009.",
        recommended: false
    },
    "mark": {
        name: "Mark Garcia",
        license: "LPCC",
        focus: ["Behavioral therapy", "Talk therapy"],
        description: "Mark Garcia is a licensed professional clinical counselor who has worked with many patients in therapy, both in-person and virtually. He utilizes unconditional positive regard and systematic desensitization with his patients. He also uses cognitive-behavioral therapy (CBT) with a few of his patients as well. He graduated from Northeastern University in 2003.",
        recommended: false
   },
    "alex": {
        name: "Alex Johnson",
        license: "LCADAC",
        focus: ["Alcohol addiction", "Sobriety"],
        description: "Alex Johnson is a licensed Clinical Alcohol and Drug Abuse Counselor who has worked with many patients to recover from alcoholism and alcohol addictions and continue the road towards remaining sober. He also specializes in patients who have and/or on a recovery path from drug addiction, specifically fentanyl. He graduated from the University of South Dakota in 2008.",
        recommended: true
   },
    "keisha": {
        name: "Keisha Moore",
        license: "CEDS",
        focus: ["Eating disorders", "Recovery"],
        description: "Keisha Moore is a Certified Eating Disorder Specialist who has worked with many patients to recover from a wide spectrum of eating disorders. Some of the disorders she helps patients work through include pica, bulimia nervosa, anorexia nervosa, rumination disorder, orthorexia. She graduated from University of California, Berkeley in 2012.",
        recommended: false
};
const groups = [
    {
        name: "Recovering From Addiction Group",
        leader: "hazel", //use the same name as the object key in counselors
        meetDay: "Wednesdays",
        meetTime: "3:00 - 4:00 PM",
        meetLength: 1, //in hours
        meetWeekly: true, 
        focus: ["Substance abuse", "Self-improvement"],
        closed: true,
        size: 14,
        description: "In this group, we avert our focus from the burden of previous abuse and blossom it into a journey. There will be ups and downs, but here we make sure those ‘ups’ are significantly greater and lead to an overall improvement. What you will find is not a dull, gray feeling, but a yellow, orange cloud of reassurance above you.",
        recommended: true,
        sent: true
    },
    {
        name: "The Road to Discovery",
        leader: "alina",
        meetDay: "Saturdays",
        meetTime: "10:00 - 11:00 AM",
        meetLength: 1, //in hours
        meetWeekly: false, 
        focus: ["Self-improvement"],
        closed: false,
        size: 10,
        description: "Rather than a group, this is a community. We strive for greatness and focus on the small activities that can collectively uplift your mood. Whether it is baking your grandmother’s pumpkin pie, or painting your outdoor landscape, we find those specific enjoyables that foster self improvement.",
        recommended: true
    },
    {
        name: "Helping with Anxiety & Depression",
        leader: "paris",
        meetDay: "Sundays",
        meetTime: "7:00 - 7:45 PM",
        meetLength: 0.75, //in hours
        meetWeekly: true, 
        focus: ["Anxiety", "Depression"],
        closed: false,
        size: 11,
        description: "When there is an impending feeling of constant gray skies and heavy weights pulling you down, it’s hard to hope for a light at the end of the tunnel, or when the space around you seems to be getting smaller and smaller.The journey is never one or two steps, but we will be there for you.",
        recommended: false
    },
];
const events = [
    {
        title: "How to Meditate",
        leader: "Taylor Peterson",
        img: "../media/meditation.jpg",
        date: "5",
        time: "10:15 - 11:00 AM",
        description: "Meditation is simple, inexpensive, and surprisingly beneficial. Not only can you relieve stress, but you can gain new perspectives and increase your imagination and self-awareness at the same time. Join us as Peterson explains how you can get started with meditation anywhere, at any time.",
        shortDescrip: "A talk on the basics of meditation"
    },
    {
        title: "The Healing Arts",
        leader: "Sarah Parker",
        img: "../media/art_supplies.jpg",
        date: "10",
        time: "4:00 - 5:00 PM",
        description: "Arts, whether it be music or painting or dance, have long played a role in enhancing our well-being. Even if you may not consider yourself an artistic or creative person, simply engaging in these activities can not only lift your mood but substantially improve your health, as well. Discover more about the power of creative expression in our lives.",
        shortDescrip: "A conversation about the benefits of arts therapy"
    },
    {
        title: "Sharing Your Story",
        leader: "Kayden Wheatley",
        img: "../media/table_group_event.jpg",
        date: "14",
        time: "3:00 - 4:30 PM",
        description: "Struggles are hard to share - Kayden Wheatley knows that just as well as anyone else. But these stories also offer a powerful way to connect with and to inspire others, to show that they are not alone. The session will start off with Kayden sharing her recovery journey, and she'll talk through how to share yours, as well. At the end, there'll be an opportunity for you to join in the discussion with your story.",
        shortDescrip: "An opportunity to share your story"
    },
    {
        title: "Connection with Nature",
        leader: "Avery Johnson",
        img: "../media/forest_event.jpg",
        date: "17",
        time: "8:00 - 9:00 AM",
        description: "Surrounding yourself with some nature is a great way to quickly lower stress levels and boost your mental health. Join us for an overview of the benefits nature has to offer us and participate in a virtual group walk from your local area.",
        shortDescrip: "A walk and talk focusing on nature"
    },
    {
        title: "Sparking Gratitude",
        leader: "Haley Morrison",
        img: "../media/thank_you_note.jpg",
        date: "23",
        time: "1:30 - 2:15 PM",
        description: "An excellent exercise in self-awareness and a wonderful mood-booster is finding something to be grateful about. It may be big, or it may be small, but what matters most is recognizing the things that give us joy in our lives. Find out more on how to practice gratitude and how it could benefit you.",
        shortDescrip: "A talk centered on gratitude and its importance"
    },
];

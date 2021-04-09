const counselors = {
    "paris": {
        name: "Paris Croiss",
        license: "LPCC",
        img: "../media/paris-croiss.png",
        focus: ["Anxiety disorders", "Mood disorders"],
        description: "Paris Cross is a licensed professional clinical counselor who has worked with many patients who have anxiety disorders, such as post-traumatic stress disorder (PTSD), obsessive-compulsive disorder (OCD) and panic disorders. She also specializes in bipolar disorder. She graduated from Auburn University in 2009.",
        recommended: false
    },
    "alina": {
        name: "Alina Miller",
        license: "LMHC",
        img: "../media/alina-miller.png",
        focus: ["Substance abuse", "Recovery"],
        description: "Alina Miller is a licensed mental health counselor who has worked with many patients and clients in order to lead the way towards recovering from substance abuse, such as opioids and narcotics. She graduated from Capella University with her degree and license in 2006.",
        recommended: true,
        sent: true
    },
    "mark": {
        name: "Mark Garcia",
        license: "LPCC",
        img: "../media/mark-garcia.png",
        focus: ["Mood disorders", "Anxiety disorders", "Eating disorders"],
        description: "Mark Garcia is a licensed professional clinical counselor who has worked with many patients in therapy, both in-person and virtually. He utilizes unconditional positive regard and systematic desensitization with his patients. He also uses cognitive-behavioral therapy (CBT) with a few of his patients as well. He graduated from Northeastern University in 2003.",
        recommended: false
   },
    "hazel": {
        name: "Hazel Jones",
        license: "LMHC",
        img: "../media/hazel-jones.png",
        focus: ["Substance abuse", "Recovery", "Mood disorders"],
        description: "Hazel Jones is a licensed mental health counselor who has worked with many patients to continue their sobriety and to offer medically-sound advice and tips for staying clean. She also specializes in mood disorders, such as clinical depression and bipolar disorder. She graduated from Walden University with her license and degree in 2014.",
        recommended: true
    },
    "alex": {
        name: "Alex Johnson",
        license: "LCADC",
        img: "../media/alex-johnson.png",
        focus: ["Substance abuse", "Recovery"],
        description: "Alex Johnson is a licensed Clinical Alcohol and Drug Abuse Counselor who has worked with many patients to recover from alcoholism and alcohol addictions and continue the road towards remaining sober. He also specializes in patients who have been or are on a recovery path from drug addiction, especially fentanyl. He graduated from the University of South Dakota in 2008.",
        recommended: false
   },
    "keisha": {
        name: "Keisha Moore",
        license: "CEDS",
        img: "../media/keisha-moore.png",
        focus: ["Eating disorders"],
        description: "Keisha Moore is a Certified Eating Disorder Specialist who has worked with many patients to recover from a wide spectrum of eating disorders. Some of the disorders she helps patients work through include pica, bulimia nervosa, anorexia nervosa, rumination disorder, and orthorexia. She graduated from University of California, Berkeley in 2012.",
        recommended: false
   },
    "lyla": {
        name: "Lyla Adams",
        license: "MD",
        img: "../media/lyla-adams.png",
        focus: ["Substance abuse", "Recovery"],
        description: "Lyla Adams is a licensed psychiatrist who has worked with many patients to recover from drug addictions, typically heroin and cocaine. She works with prescribing medication that does not contain opioids and narcotics. She works closely with prescribing the medications offered at the KatKure store and is constantly researching ways to break the prescription misuse cycle. She graduated from Johns Hopkins in 1998.",
        recommended: true
    }
};
const groups = [
    {
        name: "Recovering From Addiction Group",
        leader: "hazel", //use the same name as the object key in counselors
        meetDay: "Wednesdays",
        meetTime: "3:00 - 4:00 PM",
        meetLength: 1, //in hours
        meetWeekly: true, 
        focus: ["Substance abuse", "Recovery"],
        closed: true,
        size: 14,
        description: "In this closed group program, we focus on continuing our journey away from substance abuse and towards a better future. On every journey there will be ups and downs, but we're here to make sure those 'ups' are significantly greater and that we know how to successfully overcome and grow beyond those 'downs' if they appear.",
        recommended: true,
        sent: true
    },
    {
        name: "Helping with Depression",
        leader: "paris",
        meetDay: "Sundays and Wednesdays",
        meetTime: "6:30 - 7:30 PM",
        meetLength: 1, //in hours
        meetWeekly: false, 
        focus: ["Depression"],
        closed: false,
        size: 11,
        description: "Depression, while complex and undeniably daunting, ultimately can be managed. This group is centered around developing beneficial skills, habits, and knowledge that can be employed to help cope with depression and to lessen its impact on daily life.",
        recommended: false
    },
    {
        name: "The Road to Discovery",
        leader: "alina",
        meetDay: "Saturdays",
        meetTime: "9:00 - 11:00 AM",
        meetLength: 2, //in hours
        meetWeekly: true, 
        focus: ["Self-improvement"],
        closed: false,
        size: 10,
        description: "This is not only a group but a community. We strive for greatness and focus on the small activities that collectively can uplift your mood. Whether it is baking your grandmother’s pumpkin pie or painting your outdoor landscape, we find those specific enjoyable activities that foster self-improvement and do them.",
        recommended: false
    },
    {
        name: "Overcoming Anxiety",
        leader: "mark",
        meetDay: "Fridays",
        meetTime: "8:00 - 9:30 AM",
        meetLength: 1.5, //in hours
        meetWeekly: true, 
        focus: ["Anxiety", "Self-improvement"],
        closed: true,
        size: 6,
        description: "This closed group program seeks to help people better understand their anxiety and, by extension, learn how to manage and overcome their fears. In a supportive and lively group setting, members will be able to participate in discussions, practice beneficial techniques, and ultimately grow into who they want to be.",
        recommended: false
    },
    {
        name: "Developing Life Skills",
        leader: "alex",
        meetDay: "Tuesdays and Thursdays",
        meetTime: "5:00 - 5:45 PM",
        meetLength: 45, //in hours
        meetWeekly: false, 
        focus: ["Self-improvement", "Recovery"],
        closed: false,
        size: 9,
        description: "This group is focused on developing various useful skills - from cooking to holding conversations to nailing job interviews - that will help you participate in your daily life to the fullest. By gaining proficiency in these skills, you'll be able to feel more prepared for and in control of your day-to-day activities.",
        recommended: false
    },
    {
        name: "Preventing Relapse",
        leader: "lyla",
        meetDay: "Wednesdays",
        meetTime: "3:00 - 5:00 PM",
        meetLength: 2, //in hours
        meetWeekly: true, 
        focus: ["Substance abuse", "Recovery"],
        closed: true,
        size: 12,
        description: "In this group, members will learn how to identify and to successfully deal with high-risk situations that could potentially lead to relapse. Learning and practicing new, healthy strategies to cope with these situations not only prevents relapse but also increases your feeling of preparedness and self-control.",
        recommended: true
    },
    {
        name: "Healing Minds",
        leader: "mark",
        meetDay: "Thursdays",
        meetTime: "1:00 - 2:30 PM",
        meetLength: 1.5, //in hours
        meetWeekly: true, 
        focus: ["Anxiety", "Depression"],
        closed: false,
        size: 7,
        description: "This group will focus on changing and managing negative thoughts and behaviors that contribute to anxiety and depression. We will also look at different and more healthy ways to look at your life, your worries, and yourself.",
        recommended: false
    }
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

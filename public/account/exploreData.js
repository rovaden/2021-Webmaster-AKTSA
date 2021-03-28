const counselors = {
    "alina": {
        name: "Alina Miller",
        license: "LMHC",
        img: "../media/testimonial_jane.png",
        focus: ["Substance abuse", "Recovery"],
        description: "Insert description here...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor, tortor in bibendum egestas, metus elit mattis felis, eget tempor justo nibh quis sem. Praesent auctor felis et sapien venenatis fermentum. Fusce id auctor urna. Nulla semper metus felis, id placerat odio vulputate eget.",
        recommended: true
    },
    "hazel": {
        name: "Hazel Jones",
        license: "LMHC",
        img: "../media/testimonial_leia.png",
        focus: ["Substance abuse", "Recovery", "Mood disorders"],
        description: "Insert description here...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor, tortor in bibendum egestas, metus elit mattis felis, eget tempor justo nibh quis sem. Praesent auctor felis et sapien venenatis fermentum. Fusce id auctor urna. Nulla semper metus felis, id placerat odio vulputate eget.",
        recommended: true
    },
    "anonymous": {
        name: "Another Name",
        license: "LPC",
        img: "../media/testimonial_leia.png",
        focus: ["Anxiety disorders", "Mood disorders"],
        description: "Insert description here...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor, tortor in bibendum egestas, metus elit mattis felis, eget tempor justo nibh quis sem. Praesent auctor felis et sapien venenatis fermentum. Fusce id auctor urna. Nulla semper metus felis, id placerat odio vulputate eget.",
        recommended: false
    },
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
        description: "Insert description here...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor, tortor in bibendum egestas, metus elit mattis felis, eget tempor justo nibh quis sem. Praesent auctor felis et sapien venenatis fermentum. Fusce id auctor urna. Nulla semper metus felis, id placerat odio vulputate eget.",
        recommended: true
    },
    {
        name: "Title of Group",
        leader: "alina",
        meetDay: "Saturdays",
        meetTime: "10:00 - 11:00 AM",
        meetLength: 1, //in hours
        meetWeekly: false, 
        focus: ["Self-improvement"],
        closed: false,
        size: 10,
        description: "Insert description here...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor, tortor in bibendum egestas, metus elit mattis felis, eget tempor justo nibh quis sem. Praesent auctor felis et sapien venenatis fermentum. Fusce id auctor urna. Nulla semper metus felis, id placerat odio vulputate eget.",
        recommended: true
    },
    {
        name: "Another title",
        leader: "anonymous",
        meetDay: "Sundays",
        meetTime: "7:00 - 7:45 PM",
        meetLength: 0.75, //in hours
        meetWeekly: true, 
        focus: ["Anxiety", "Depression"],
        closed: false,
        size: 11,
        description: "Insert description here...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor, tortor in bibendum egestas, metus elit mattis felis, eget tempor justo nibh quis sem. Praesent auctor felis et sapien venenatis fermentum. Fusce id auctor urna. Nulla semper metus felis, id placerat odio vulputate eget.",
        recommended: false
    },
];
const events = [
    {
        title: "How to Meditate",
        leader: "Taylor Peterson",
        img: "../media/herbal.jpg",
        date: "+5",
        time: "10:00 - 10:45 AM",
        description: "Insert description here...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor, tortor in bibendum egestas, metus elit mattis felis, eget tempor justo nibh quis sem. Praesent auctor felis et sapien venenatis fermentum. Fusce id auctor urna. Nulla semper metus felis, id placerat odio vulputate eget.",
        shortDescrip: "A talk on the basics of meditation"
    }
];
import logo from './logo.png'
import add_icon from './add_icon.png'
import order_icon from './order_icon.png'
import upload_area from './upload_area.png'
import parcel_icon from './parcel_icon.svg'
import bin_icon from './bin_icon.png'
import uni_logo from './uni_logo.png'
import profile_icon from './profile_icon.png'

export const assets = {
    logo,
    add_icon,
    order_icon,
    upload_area,
    parcel_icon,
    bin_icon,
    uni_logo,
    profile_icon
}

import r1 from './r1.png'
import l1 from './l1.png'
import ic1 from './ic1.png'
import w1 from './w1.png'
import w2 from './w2.png'

import EQ1140 from './EQ1140.png'
import EQ1143 from './EQ1143.png'
import EQ1144 from './EQ1144.png'

import MSA from './MSA.png'
import SSA from './SSA.png'
import ASA from './ASA.png'
import ASB from './ASB.png'

import CM51 from './CM51.png'
import rpie from './rpie.png'

export const requests = [
    {
      _id: "req1",
      items: [
        {
          name: "IC Bases",
          quantity: 2,
          size: "10pin",
          color: null,
        },
        {
          name: "LEDs",
          quantity: 6,
          size: null,
          color: "Red",
        },
      ],
      address: {
        firstName: "John",
        lastName: "Doe",
        phone: "081-4387222",
      },
      date: 1716634345448, // Example timestamp
      status: "Accepted", // Add status for select dropdown
    },
    {
      _id: "req2",
      items: [
        {
          name: "Resistors",
          quantity: 10,
          size: null,
          color: null,
        },
        {
          name: "Wires",
          quantity: 5,
          size: "5m",
          color: "Black",
        },
      ],
      address: {
        firstName: "Jane",
        lastName: "Smith",
        phone: "071-4547987",
      },
      date: 1716634345450,
      status: "Declined",
    },

    {
      _id: "req2",
      items: [
        {
          name: "Resistors",
          quantity: 10,
          size: null,
          color: null,
        },
        {
          name: "Wires",
          quantity: 5,
          size: "5m",
          color: "Black",
        },
      ],
      address: {
        firstName: "Jane",
        lastName: "Smith",
        phone: "071-4547987",
      },
      date: 1716634345450,
      status: "Pending",
    },
  ];
  



export const products = [
    
    {
        _id: "aaaaa",
        name: "IC Bases",
        description: "Form Factor: DIP - 0.1, Price	: Rs. 8.00",
        quantity: 50,
        image: [ic1],
        category: "Consumables",
        subCategory: "IC Bases",
        sizes: ["10pin", "12pin", "14pin"],
        date: 1716634345448,
        available: true
    },
    {
        _id: "aaaab",
        name: "LEDs",
        description: "Datasheet URL	: [Not Available], Price	: Rs. 2.00",
        quantity: 60,
        image: [l1],
        category: "Consumables",
        subCategory: "LEDs",
        colors: ["Red", "Yellow", "Green", "IR", "Blue"],
        sizes: ["10pin", "12pin", "14pin"],
        date: 1716621345448,
        available: true
    },
    {
        _id: "aaaac",
        name: "Resistors",
        description: "Resistor used to control the current flow",
        quantity: 100,
        image: [r1],
        category: "Consumables",
        subCategory: "Resistors",
        sizes: ["220", "480", "1K", "1.5k","2k" ],
        date: 1716234545448,
        available: true
    },
    {
        _id: "aaaad",
        name: "Circuit Wires",
        description: "Datasheet URL	: [Not Available],Price	: Rs. 15.00",
        quantity: 50,
        image: [w1],
        category: "Consumables",
        subCategory: "Wires",
        colors: ["Red", "Black", "White","Orange"],
        date: 1716621345448,
        available: true
    },
    {
        _id: "aaaae",
        name: "Single-core wires",
        description: "Datasheet URL	: [Not Available],Price	: Rs. 10.00",
        quantity: 70,
        image: [w2],
        category: "Consumables",
        subCategory: "Wires",
        sizes: ["Red", "Black", "Yellow"],
        date: 1716622345448,
        available: true
    },
    {
        _id: "aaaaf",
        name: "Impact Drill",
        description: "Input power: 650W, No-load speed: 0-2700rpm, Max. drilling capacity: 13mm, Variable speed control, Forward/Reverse switch, Hammer function",
        quantity: 10,
        image: [EQ1140],
        category: "Equipment",
        subCategory: "Drills",
        date: 1716623423448,
        available: true
    },
    {
        _id: "aaaag",
        name: "Mini Grinder",
        description: "No-load speed:10000-32000,rpm Collet size:3.2mm,Variable speed control,With 1pcs flexible shaft,With 52pcs accessories",
        quantity: 5,
        image: [EQ1143],
        category: "Equipment",
        subCategory: "Grinders",
        sizes: ["S", "L", "XL"],
        date: 1716621542448,
        available: false
    },
    {
        _id: "aaaah",
        name: "Heat Gun",
        description: "Temperature 50°C, 50-630°C, 50-630°C, Airflow 200-500 L/min, 200-500 L/min, 500 L/min, Adjustable temperature with LCD display for precise control, With 1 pcs scraper and 4 pcs nozzles, With 1 pcs 60mm putty trowel",
        quantity: 3,
        image: [EQ1144],
        category: "Equipment",
        subCategory: "Grinders",
        sizes: ["S", "M", "L", "XL"],
        date: 1716622345448,
        available: false
    },
    {
        _id: "aaaai",
        name: "Assembly Station A",
        description: "Capacity	: 1-3 students per table",
        quantity: 1,
        image: [ASA],
        category: "Stations",
        subCategory: "Assembly",
        sizes: ["M", "L", "XL"],
        date: 1716621235448,
        available: false
    },
    {
        _id: "aaaaj",
        name: "Measuring Station A",
        description: "Capacity	: 1-3 students per table",
        quantity: 1,
        image: [MSA],
        category: "Stations",
        subCategory: "Measuring",
        sizes: ["S", "L", "XL"],
        date: 1716622235448,
        available: false
    },
    {
        _id: "aaaak",
        name: "Soldering station A",
        description: "Capacity	: 1-3 students per table",
        quantity: 1,
        image: [SSA],
        category: "Stations",
        subCategory: "Soldering",
        sizes: ["S", "M", "L"],
        date: 1716623345448,
        available: false
    },
    {
        _id: "aaaal",
        name: "Assembly Station B",
        description: "Capacity	: 1-3 students per table",
        quantity: 1,
        image: [ASB],
        category: "Stations",
        subCategory: "Assembly",
        date: 1716622235448,
        available: false
    },
    
    {
        _id: "aaaam",
        name: "Arduino Shield",
        description: "boards that can be plugged on top of the Arduino PCB extending its capabilities",
        quantity: 5,
        image: [CM51],
        category: "Components",
        subCategory: "Arduino",
        sizes: ["Ethernet", "Xbee", "Proto"],
        date: 1716624445448,
        available: false
    },

    {
        _id: "aaaan",
        name: "Raspberry Pi",
        description: "Raspberry Pi 5 8GB RAM, SBC, Raspberry Pi5 8GB, BCM2712, Arm Cortex-A76, 8GB RAM, MicroSD, WiFi, HDMI, Power Button",
        quantity: 2,
        image: [rpie],
        category: "Components",
        subCategory: "Raspberry",
        sizes: ["Ethernet", "Xbee", "Proto"],
        date: 1716624445448,
        available: false
    }
    
   
]
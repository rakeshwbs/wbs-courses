const week1Questions = [
    {
        question:
            "Which layer of the OSI model is responsible for logical addressing (e.g., IP addresses) and forwarding packets between different networks?",
        options: [
            "Layer 2 (Data Link)",
            "Layer 4 (Transport)",
            "Layer 7 (Application)",
            "Layer 3 (Network)"
        ],
        answer: "Layer 3 (Network)",
        explanation:
            "The Network Layer (Layer 3) is responsible for path determination and logical addressing (IP addresses). This is where routing occurs."
    },
    {
        question:
            "A company in Port Louis wants to connect its local network to its new branch office network in Ebène. Which device is essential for enabling communication between these two separate networks?",
        options: [
            "A Switch",
            "A Router",
            "A Hub",
            "A Repeater"
        ],
        answer: "A Router",
        explanation:
            "Routers are Layer 3 devices specifically designed to forward traffic between different logical networks. Switches operate within a single network."
    },
    {
        question:
            "On what type of address does a standard Layer 2 switch base its forwarding decisions?",
        options: [
            "IP Address",
            "Port Number",
            "MAC Address",
            "Subnet Mask"
        ],
        answer: "MAC Address",
        explanation:
            "A Layer 2 switch operates at the Data Link layer and builds a MAC address table to forward frames to the correct physical port within a local network."
    },
    {
        question:
            "In the lab, the command `show ip interface brief` was used on a router. What is the primary purpose of this command?",
        options: [
            "To display the entire routing table.",
            "To provide a quick summary of the status (up/down) and IP address of each interface.",
            "To show the full running configuration of the router.",
            "To test connectivity to another device."
        ],
        answer: "To provide a quick summary of the status (up/down) and IP address of each interface.",
        explanation:
            "This command is a first-step verification tool to quickly check if interfaces are administratively enabled and have the correct IP addresses assigned."
    },
    {
        question:
            "Which statement accurately describes the reason the ping from PC-A to PC-B failed in the Week 1 lab exercise?",
        options: [
            "The switches were configured incorrectly.",
            "The serial cable between the routers was faulty.",
            "The routers did not have a route telling them how to reach the remote network.",
            "The PCs had incorrect MAC addresses."
        ],
        answer: "The routers did not have a route telling them how to reach the remote network.",
        explanation:
            "Even though the physical connections were up, the routers lacked the necessary information in their routing tables to forward packets between the 192.168.1.0/24 and 192.168.2.0/24 networks."
    },
    {
        question:
            "What information does the `show ip route` command display on a Cisco router?",
        options: [
            "Only the interfaces that are currently down.",
            "A list of all MAC addresses the router has learned.",
            "The router's mapping of known networks and the paths to reach them.",
            "A real-time log of all packets being forwarded."
        ],
        answer: "The router's mapping of known networks and the paths to reach them.",
        explanation:
            "The routing table is the 'brain' of the router's Layer 3 forwarding decisions, and `show ip route` is the command used to view it."
    },
    {
        question:
            "Which of the following correctly pairs an address type with its characteristic?",
        options: [
            "MAC Address - Logical and configurable",
            "IP Address - Physical and burned-in",
            "MAC Address - Operates at Layer 3",
            "IP Address - Logical and configurable"
        ],
        answer: "IP Address - Logical and configurable",
        explanation:
            "IP addresses are logical and assigned by network administrators (or DHCP). MAC addresses are physical, burned into the hardware at the factory, and operate at Layer 2."
    },
    {
        question:
            "In the TCP/IP model, a single 'Application' layer corresponds to which group of layers in the OSI model?",
        options: [
            "Application, Presentation, Session",
            "Network, Data Link, Physical",
            "Transport, Network, Data Link",
            "Application and Presentation only"
        ],
        answer: "Application, Presentation, Session",
        explanation:
            "The TCP/IP model combines the functions of the top three OSI layers (Application, Presentation, and Session) into its single Application layer for simplicity."
    },
    {
        question:
            "What is the purpose of using the `no shutdown` command on a router interface?",
        options: [
            "To erase the configuration of the interface.",
            "To physically power down the router.",
            "To administratively enable the interface, allowing it to send and receive traffic.",
            "To save the running configuration."
        ],
        answer: "To administratively enable the interface, allowing it to send and receive traffic.",
        explanation:
            "By default, router interfaces are in a shutdown state. The `no shutdown` command is required to bring them online."
    },
    {
        question:
            "A data packet is being sent from your PC to a web server. Which of the following represents the correct order of data encapsulation using the OSI model?",
        options: [
            "Packet -> Frame -> Segment -> Bits",
            "Segment -> Packet -> Frame -> Bits",
            "Frame -> Packet -> Segment -> Bits",
            "Bits -> Frame -> Packet -> Segment"
        ],
        answer: "Segment -> Packet -> Frame -> Bits",
        explanation:
            "Data starts at the top layers, is broken into Segments (Layer 4), encapsulated into Packets (Layer 3), then into Frames (Layer 2), and finally transmitted as Bits (Layer 1)."
    }
];

export default week1Questions;
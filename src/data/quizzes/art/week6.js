const week6Questions = [
    {
        question:
            "What is the primary purpose of Network Address Translation (NAT)?",
        options: [
            "To assign IP addresses to hosts automatically.",
            "To encrypt data packets for secure transmission.",
            "To translate private, non-routable IP addresses into public, routable IP addresses.",
            "To filter traffic based on port numbers."
        ],
        answer: "To translate private, non-routable IP addresses into public, routable IP addresses.",
        explanation:
            "NAT's main function is to conserve IPv4 addresses by allowing an entire private network (using RFC 1918 addresses) to access the internet through a smaller set of public IPs."
    },
    {
        question:
            "In which scenario would you most likely use Static NAT?",
        options: [
            "To allow employees to browse the web.",
            "To make an internal web server accessible from the internet.",
            "To randomly assign public IPs to internal users.",
            "To block all incoming traffic."
        ],
        answer: "To make an internal web server accessible from the internet.",
        explanation:
            "Static NAT creates a permanent, one-to-one mapping between a public IP and a private IP, which is ideal for allowing external users to reliably connect to an internal resource like a web or mail server."
    },
    {
        question:
            "Which type of NAT allows multiple internal devices to share a single public IP address by using unique port numbers to track sessions?",
        options: [
            "Static NAT",
            "Dynamic NAT",
            "Port Address Translation (PAT)",
            "Transparent NAT"
        ],
        answer: "Port Address Translation (PAT)",
        explanation:
            "PAT, also known as NAT Overload, is the most common form of NAT. It achieves a many-to-one translation by mapping the internal IP and port to the single public IP with a unique new port number."
    },
    {
        question:
            "In NAT terminology, what does the 'Inside Local' address represent?",
        options: [
            "The public IP of your router.",
            "The public IP of an external server.",
            "The private IP address of a host on your internal network.",
            "The IP address of the DNS server."
        ],
        answer: "The private IP address of a host on your internal network.",
        explanation:
            "The 'Inside Local' address is the actual private IP address assigned to a device (like a PC or server) that is located on the inside, private segment of the network."
    },
    {
        question:
            "What is the purpose of the `ip nat outside` command when configuring NAT on a Cisco router?",
        options: [
            "It defines the pool of public IP addresses to be used.",
            "It identifies an interface as being connected to the external, public network (like the internet).",
            "It creates a static NAT translation.",
            "It enables NAT logging for all outside traffic."
        ],
        answer: "It identifies an interface as being connected to the external, public network (like the internet).",
        explanation:
            "A NAT router must be explicitly told which of its interfaces is 'inside' (private) and which is 'outside' (public) to know how to apply the translation rules correctly."
    },
    {
        question:
            "Which command would you use to view the active, real-time NAT mappings on a router?",
        options: [
            "show ip route",
            "show ip nat statistics",
            "show running-config",
            "show ip nat translations"
        ],
        answer: "show ip nat translations",
        explanation:
            "`show ip nat translations` displays the NAT table, showing the mapping between Inside Local, Inside Global, Outside Local, and Outside Global addresses for every active session."
    },
    {
        question:
            "What is the primary disadvantage of Dynamic NAT when compared to PAT (NAT Overload)?",
        options: [
            "It is much more difficult to configure.",
            "It only allows as many simultaneous users as there are public IPs in the NAT pool.",
            "It does not work for web Browse.",
            "It is less secure than PAT."
        ],
        answer: "It only allows as many simultaneous users as there are public IPs in the NAT pool.",
        explanation:
            "Dynamic NAT creates a one-to-one mapping from the pool. If the pool has 10 addresses, only 10 users can get out at once. PAT solves this by allowing a many-to-one mapping, conserving public IPs much more effectively."
    },
    {
        question:
            "Which of the following IP address ranges is defined by RFC 1918 for private use?",
        options: [
            "1.1.1.0 - 1.1.1.255",
            "172.16.0.0 - 172.31.255.255",
            "203.0.113.0 - 203.0.113.255",
            "8.8.8.0 - 8.8.8.255"
        ],
        answer: "172.16.0.0 - 172.31.255.255",
        explanation:
            "The three private ranges are 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. The others are public IP address ranges."
    },
    {
        question:
            "What crucial keyword must be added to a NAT configuration command to enable Port Address Translation (PAT)?",
        options: [
            "dynamic",
            "pat",
            "overload",
            "multiplex"
        ],
        answer: "overload",
        explanation:
            "The `overload` keyword at the end of the `ip nat inside source` command tells the router to perform PAT, mapping multiple internal IPs to a single public IP by using unique port numbers."
    },
    {
        question:
            "In a typical Dynamic NAT or PAT configuration, what is the role of an Access Control List (ACL)?",
        options: [
            "To block malicious traffic from the internet.",
            "To define the pool of public IP addresses.",
            "To identify which internal source IP addresses are permitted to be translated.",
            "To specify which destination websites are allowed."
        ],
        answer: "To identify which internal source IP addresses are permitted to be translated.",
        explanation:
            "The ACL is used to create a 'permit' list. The NAT process will only translate traffic from source IPs that are permitted by the ACL linked to the NAT rule."
    }
];

export default week6Questions;
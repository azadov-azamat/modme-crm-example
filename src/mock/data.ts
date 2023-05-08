import {groupsProps, studentProps} from "../interface/redux/variable.interface";

export const mockStudents: studentProps[] = [
        {
            id: 1,
            name: "Omadbek",
            groupId: "11581",
            phone: "(97) 773-33-73",
            balance: "412 500"
        },
        {
            id: 2,
            name: "Sevara",
            groupId: "11581",
            phone: "(97) 773-33-73",
            balance: "300 500"
        },
        {
            id: 3,
            name: "Nodir",
            groupId: "11581",
            phone: "(97) 773-33-73",
            balance: "522 500"
        },
        {
            id: 4,
            name: "Rozaliya",
            groupId: "11580",
            phone: "(97) 773-33-73",
            balance: "102 000"
        },
        {
            id: 5,
            name: "Malika",
            groupId: "11580",
            phone: "(97) 773-33-73",
            balance: "500 000"
        },
        {
            id: 6,
            name: "Baxrom",
            groupId: "11580",
            phone: "(97) 773-33-73",
            balance: "350 000"
        },
        {
            id: 7,
            name: "Venera",
            groupId: "...",
            phone: "(97) 773-33-73",
            balance: "410 000"
        },
        {
            id: 8,
            name: "Yupiter",
            groupId: "...",
            phone: "(97) 773-33-73",
            balance: "210 000"
        },
        {
            id: 9,
            name: "Azamat",
            groupId: "...",
            phone: "(97) 773-33-73",
            balance: "1 000"
        },
        {
            id: 10,
            name: "Sarvar",
            groupId: "team",
            phone: "(97) 773-33-73",
            balance: "20 000"
        },
        {
            id: 11,
            name: "Alisher",
            groupId: "team",
            phone: "(97) 773-33-73",
            balance: "540 000"
        },
        {
            id: 12,
            name: "Ulugbek",
            groupId: "team",
            phone: "(97) 773-33-73",
            balance: "1 000 000"
        },
        {
            id: 13,
            name: "Shahriyor",
            groupId: "11532",
            phone: "(97) 773-33-73",
            balance: "1 200 000"
        },
        {
            id: 14,
            name: "Tohir",
            groupId: "11532",
            phone: "(97) 773-33-73",
            balance: "200 000"
        },
        {
            id: 15,
            name: "Odilbek",
            groupId: "11532",
            phone: "(97) 773-33-73",
            balance: "400 000"
        },
        {
            id: 16,
            name: "Erkin",
            groupId: "11523",
            phone: "(97) 773-33-73",
            balance: "600 000"
        },
        {
            id: 17,
            name: "Eldor",
            groupId: "11523",
            phone: "(97) 773-33-73",
            balance: "700 000"
        },
        {
            id: 18,
            name: "Gulbahor",
            groupId: "11523",
            phone: "(97) 773-33-73",
            balance: "110 000"
        },
        {
            id: 19,
            name: "Nodirabegim",
            groupId: "Malika individual",
            phone: "(97) 773-33-73",
            balance: "330 000"
        },
        {
            id: 20,
            name: "Asal",
            groupId: "Malika individual",
            phone: "(97) 773-33-73",
            balance: "800 000"
        },
        {
            id: 21,
            name: "Husniddin",
            groupId: "Malika individual",
            phone: "(97) 773-33-73",
            balance: "80 000"
        }
    ]

export const mockGroups: groupsProps[] = [
    {
        id: "11581",
        name: "Rus tili",
        teacher: "Malika Sh.",
        time: "3:30pm",
        status: false,
        days: "Boshqa",
        narx: "500 000",
        room: "1 - xona",
        startTime: "08:00",
        startDate: "12/03/2023",
        finalDate: "23/05/2023",
        students: mockStudents.filter(item => item.groupId === "11581")
    },
    {
        id: "11580",
        name: "SMM",
        teacher: "Ms. Ezoza",
        time: "3:30pm",
        status: true,
        days: "Boshqa",
        narx: "600 000",
        room: "2 - xona",
        startTime: "08:00",
        startDate: "01/02/2023",
        finalDate: "25/06/2023",
        students: mockStudents.filter(item => item.groupId === "11580")
    },
    {
        id: "...",
        name: "3D's MAX",
        teacher: "Mr. Sherzod",
        time: "4:00pm",
        status: false,
        days: "Boshqa",
        narx: "800 000",
        room: "3 - xona",
        startTime: "08:00",
        startDate: "01/02/2023",
        finalDate: "25/03/2023",
        students: mockStudents.filter(item => item.groupId === "...")
    },
    {
        id: "team",
        name: "Motion Grafika",
        teacher: "Ms. Ezoza",
        time: "11:00am",
        status: true,
        days: "Boshqa",
        narx: "500 000",
        room: "1 - xona",
        startTime: "08:00",
        startDate: "10/02/2023",
        finalDate: "25/07/2023",
        students: mockStudents.filter(item => item.groupId === "team")
    },
    {
        id: "team",
        name: "Motion Grafika",
        teacher: "Ms. Ezoza",
        time: "11:00am",
        status: false,
        days: "Boshqa",
        narx: "700 000",
        room: "1 - xona",
        startTime: "08:00",
        startDate: "10/02/2023",
        finalDate: "25/07/2023",
        students: mockStudents.filter(item => item.groupId === "team")
    },
    {
        id: "11532",
        name: "Arab tili",
        teacher: "Mr. Ismoil",
        time: "10:00am",
        status: true,
        days: "Juft kunlar",
        narx: "300 000",
        room: "2 - xona",
        startTime: "08:00",
        startDate: "01/04/2023",
        finalDate: "25/07/2023",
        students: mockStudents.filter(item => item.groupId === "11532")
    },
    {
        id: "Malika individual",
        name: "3D's MAX",
        teacher: "Mr. Sherzod",
        time: "7:00pm",
        status: false,
        days: "Boshqa",
        narx: "600 000",
        room: "3 - xona",
        startTime: "08:00",
        startDate: "20/01/2023",
        finalDate: "25/04/2023",
        students: mockStudents.filter(item => item.groupId === "Malika individual")
    },
    {
        id: "11523",
        name: "3D's MAX",
        teacher: "Mr. Sherzod",
        time: "3:30pm",
        status: true,
        days: "Boshqa",
        narx: "700 000",
        room: "2 - xona",
        startTime: "08:00",
        startDate: "25/01/2023",
        finalDate: "25/04/2023",
        students: mockStudents.filter(item => item.groupId === "11523")
    }
]
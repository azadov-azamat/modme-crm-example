import {
    coursesProps,
    employeesProps,
    groupsProps,
    roomsProps,
    studentProps,
    systemRoleProps
} from "../interface/redux/variable.interface";

export const mockRooms: roomsProps[] = [
    {
        id: 1,
        name: "1 - xona"
    },
    {
        id: 2,
        name: "2 - xona"
    },
    {
        id: 3,
        name: "3 - xona"
    },
    {
        id: 4,
        name: "4 - xona"
    },
    {
        id: 5,
        name: "5 - xona"
    }
]

export const mockSystemRoles: systemRoleProps[] = [
    {
        id: 1,
        name: "CEO direktor"
    },
    {
        id: 2,
        name: "Admin"
    },
    {
        id: 3,
        name: "Kassir"
    },
    {
        id: 4,
        name: "Operator"
    },
    {
        id: 5,
        name: "Teacher"
    }
]
export const mockEmployees: employeesProps[] = [
    {
        id: 1,
        name: "Ruslan Yuldashev",
        phone: "(97) 773-33-73",
        birthdate: "12/03/1989",
        gander: true,
        role: mockSystemRoles[0],
        password: "010203"
    },
    {
        id: 2,
        name: "Fotima Yuldasheva",
        phone: "(97) 773-33-73",
        birthdate: "12/03/1992",
        gander: false,
        role: mockSystemRoles[4],
        password: "010203"
    },
    {
        id: 3,
        name: "Husan Abdullayev",
        phone: "(97) 773-33-73",
        birthdate: "12/03/2004",
        gander: true,
        role: mockSystemRoles[2],
        password: "010203"
    },
    {
        id: 4,
        name: "Muhammadillo Xakimov",
        phone: "(97) 773-33-73",
        birthdate: "12/03/2004",
        gander: true,
        role: mockSystemRoles[4],
        password: "010203"
    },
    {
        id: 5,
        name: "Xusniddin Xamidov",
        phone: "(97) 773-33-73",
        birthdate: "12/03/2004",
        gander: true,
        role: mockSystemRoles[3],
        password: "010203"
    },
    {
        id: 6,
        name: "Asal Ileysboyeva",
        phone: "(97) 773-33-73",
        birthdate: "12/03/2004",
        gander: false,
        role: mockSystemRoles[4],
        password: "010203"
    },
    {
        id: 7,
        name: "Ahmad shox ",
        phone: "(97) 773-33-73",
        birthdate: "12/03/2004",
        gander: true,
        role: mockSystemRoles[4],
        password: "010203"
    },
    {
        id: 8,
        name: "Abdulmuhsin Yuldashev",
        phone: "(97) 773-33-73",
        birthdate: "12/03/2003",
        gander: true,
        role: mockSystemRoles[3],
        password: "010203"
    },
    {
        id: 9,
        name: "Azamat Azadov",
        phone: "(93) 205-24-43",
        birthdate: "22/08/2002",
        gander: true,
        role: mockSystemRoles[1],
        password: "010203"
    },
    {
        id: 10,
        name: "Shaxzoda Abdullayeva",
        phone: "(97) 773-33-73",
        birthdate: "01/08/2003",
        gander: false,
        role: mockSystemRoles[4],
        password: "010203"
    },
    {
        id: 11,
        name: "Ezoza Abdullayeva",
        phone: "(97) 773-33-73",
        birthdate: "12/03/2003",
        gander: false,
        role: mockSystemRoles[4],
        password: "010203"
    },
    {
        id: 12,
        name: "Nafisa Ahmadaliyeva",
        phone: "(97) 773-33-73",
        birthdate: "04/05/2003",
        gander: false,
        role: mockSystemRoles[4],
        password: "010203"
    },
    {
        id: 13,
        name: "Malika Elnazarova",
        phone: "(97) 773-33-73",
        birthdate: "04/05/2003",
        gander: false,
        role: mockSystemRoles[4],
        password: "010203"
    }
]

export const mockGroups: groupsProps[] = [
    {
        id: "11581",
        name: "Rus tili",
        teacher: mockEmployees.filter(e => e.role.id === 5)[Math.floor(Math.random() * mockEmployees.filter(e => e.role.id === 5).length)],
        time: "3:30pm",
        status: false,
        days: "Boshqa",
        price: "500 000",
        room: mockRooms[Math.floor(Math.random() * mockRooms.length)],
        startTime: "08:00",
        startDate: "12/03/2023",
        finalDate: "23/05/2023"
    },
    {
        id: "11580",
        name: "SMM",
        teacher: mockEmployees.filter(e => e.role.id === 5)[Math.floor(Math.random() * mockEmployees.filter(e => e.role.id === 5).length)],
        time: "3:30pm",
        status: true,
        days: "Boshqa",
        price: "600 000",
        room: mockRooms[Math.floor(Math.random() * mockRooms.length)],
        startTime: "08:00",
        startDate: "01/02/2023",
        finalDate: "25/06/2023"
    },
    {
        id: "...",
        name: "3D's MAX",
        teacher: mockEmployees.filter(e => e.role.id === 5)[Math.floor(Math.random() * mockEmployees.filter(e => e.role.id === 5).length)],
        time: "4:00pm",
        status: false,
        days: "Boshqa",
        price: "800 000",
        room: mockRooms[Math.floor(Math.random() * mockRooms.length)],
        startTime: "08:00",
        startDate: "01/02/2023",
        finalDate: "25/03/2023"
    },
    {
        id: "team",
        name: "Motion Grafika",
        teacher: mockEmployees.filter(e => e.role.id === 5)[Math.floor(Math.random() * mockEmployees.filter(e => e.role.id === 5).length)],
        time: "11:00am",
        status: true,
        days: "Boshqa",
        price: "500 000",
        room: mockRooms[Math.floor(Math.random() * mockRooms.length)],
        startTime: "08:00",
        startDate: "10/02/2023",
        finalDate: "25/07/2023"
    },
    {
        id: "team",
        name: "Motion Grafika",
        teacher: mockEmployees.filter(e => e.role.id === 5)[Math.floor(Math.random() * mockEmployees.filter(e => e.role.id === 5).length)],
        time: "11:00am",
        status: false,
        days: "Boshqa",
        price: "700 000",
        room: mockRooms[Math.floor(Math.random() * mockRooms.length)],
        startTime: "08:00",
        startDate: "10/02/2023",
        finalDate: "25/07/2023"
    },
    {
        id: "11532",
        name: "Arab tili",
        teacher: mockEmployees.filter(e => e.role.id === 5)[Math.floor(Math.random() * mockEmployees.filter(e => e.role.id === 5).length)],
        time: "10:00am",
        status: true,
        days: "Juft kunlar",
        price: "300 000",
        room: mockRooms[Math.floor(Math.random() * mockRooms.length)],
        startTime: "08:00",
        startDate: "01/04/2023",
        finalDate: "25/07/2023"
    },
    {
        id: "Malika individual",
        name: "3D's MAX",
        teacher: mockEmployees.filter(e => e.role.id === 5)[Math.floor(Math.random() * mockEmployees.filter(e => e.role.id === 5).length)],
        time: "7:00pm",
        status: false,
        days: "Boshqa",
        price: "600 000",
        room: mockRooms[Math.floor(Math.random() * mockRooms.length)],
        startTime: "08:00",
        startDate: "20/01/2023",
        finalDate: "25/04/2023"
    },
    {
        id: "11523",
        name: "3D's MAX",
        teacher: mockEmployees.filter(e => e.role.id === 5)[Math.floor(Math.random() * mockEmployees.filter(e => e.role.id === 5).length)],
        time: "3:30pm",
        status: true,
        days: "Boshqa",
        price: "700 000",
        room: mockRooms[Math.floor(Math.random() * mockRooms.length)],
        startTime: "08:00",
        startDate: "25/01/2023",
        finalDate: "25/04/2023"
    }
]

export const mockStudents: studentProps[] = [
    {
        id: 1,
        name: "Omadbek",
        groupId: mockGroups[Math.floor(Math.random() * mockGroups.length)].id,
        phone: "(97) 773-33-73",
        balance: "412 500"
    },
    {
        id: 2,
        name: "Sevara",
        groupId: mockGroups[Math.floor(Math.random() * mockGroups.length)].id,
        phone: "(97) 773-33-73",
        balance: "300 500"
    },
    {
        id: 3,
        name: "Nodir",
        groupId: mockGroups[Math.floor(Math.random() * mockGroups.length)].id,
        phone: "(97) 773-33-73",
        balance: "522 500"
    },
    {
        id: 4,
        name: "Rozaliya",
        groupId: mockGroups[Math.floor(Math.random() * mockGroups.length)].id,
        phone: "(97) 773-33-73",
        balance: "102 000"
    },
    {
        id: 5,
        name: "Malika",
        groupId: mockGroups[Math.floor(Math.random() * mockGroups.length)].id,
        phone: "(97) 773-33-73",
        balance: "500 000"
    },
    {
        id: 6,
        name: "Baxrom",
        groupId: mockGroups[Math.floor(Math.random() * mockGroups.length)].id,
        phone: "(97) 773-33-73",
        balance: "350 000"
    },
    {
        id: 7,
        name: "Venera",
        groupId: mockGroups[Math.floor(Math.random() * mockGroups.length)].id,
        phone: "(97) 773-33-73",
        balance: "410 000"
    },
    {
        id: 8,
        name: "Yupiter",
        groupId: mockGroups[Math.floor(Math.random() * mockGroups.length)].id,
        phone: "(97) 773-33-73",
        balance: "210 000"
    },
    {
        id: 9,
        name: "Azamat",
        groupId: mockGroups[Math.floor(Math.random() * mockGroups.length)].id,
        phone: "(97) 773-33-73",
        balance: "1 000"
    },
    {
        id: 10,
        name: "Sarvar",
        groupId: mockGroups[Math.floor(Math.random() * mockGroups.length)].id,
        phone: "(97) 773-33-73",
        balance: "20 000"
    },
    {
        id: 11,
        name: "Alisher",
        groupId: mockGroups[Math.floor(Math.random() * mockGroups.length)].id,
        phone: "(97) 773-33-73",
        balance: "540 000"
    },
    {
        id: 12,
        name: "Ulugbek",
        groupId: mockGroups[Math.floor(Math.random() * mockGroups.length)].id,
        phone: "(97) 773-33-73",
        balance: "1 000 000"
    },
    {
        id: 13,
        name: "Shahriyor",
        groupId: mockGroups[Math.floor(Math.random() * mockGroups.length)].id,
        phone: "(97) 773-33-73",
        balance: "1 200 000"
    },
    {
        id: 14,
        name: "Tohir",
        groupId: mockGroups[Math.floor(Math.random() * mockGroups.length)].id,
        phone: "(97) 773-33-73",
        balance: "200 000"
    },
    {
        id: 15,
        name: "Odilbek",
        groupId: mockGroups[Math.floor(Math.random() * mockGroups.length)].id,
        phone: "(97) 773-33-73",
        balance: "400 000"
    },
    {
        id: 16,
        name: "Erkin",
        groupId: mockGroups[Math.floor(Math.random() * mockGroups.length)].id,
        phone: "(97) 773-33-73",
        balance: "600 000"
    },
    {
        id: 17,
        name: "Eldor",
        groupId: mockGroups[Math.floor(Math.random() * mockGroups.length)].id,
        phone: "(97) 773-33-73",
        balance: "700 000"
    },
    {
        id: 18,
        name: "Gulbahor",
        groupId: mockGroups[Math.floor(Math.random() * mockGroups.length)].id,
        phone: "(97) 773-33-73",
        balance: "110 000"
    },
    {
        id: 19,
        name: "Nodirabegim",
        groupId: mockGroups[Math.floor(Math.random() * mockGroups.length)].id,
        phone: "(97) 773-33-73",
        balance: "330 000"
    },
    {
        id: 20,
        name: "Asal",
        groupId: mockGroups[Math.floor(Math.random() * mockGroups.length)].id,
        phone: "(97) 773-33-73",
        balance: "800 000"
    },
    {
        id: 21,
        name: "Husniddin",
        groupId: mockGroups[Math.floor(Math.random() * mockGroups.length)].id,
        phone: "(97) 773-33-73",
        balance: "80 000"
    }
]

export const mockCourse: coursesProps[] = [
    {
        id: 1,
        name: "Targetolog",
        price: "900 000",
        child: null
    },
    {
        id: 2,
        name: "Web",
        price: "100 000",
        child: null
    },
    {
        id: 3,
        name: "Web site qilish",
        price: "400 000",
        child: null
    },
    {
        id: 4,
        name: "English beginner",
        price: "500 000",
        child: null
    },
    {
        id: 5,
        name: "Rus tili",
        price: "400 000",
        child: null
    },
    {
        id: 6,
        name: "SMM",
        price: "200 000",
        child: null
    },
    {
        id: 7,
        name: "3D's MAX",
        price: "800 000",
        child: null
    },
    {
        id: 8,
        name: "Web",
        price: "400 000",
        child: null
    }
]
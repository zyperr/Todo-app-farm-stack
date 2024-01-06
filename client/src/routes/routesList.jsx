import { MdHome,MdCheck,MdAdd } from "react-icons/md"


export const routesList = [
    {
        path: '/',
        name: 'Home',
        icon: <MdHome size={30}></MdHome>
    },
    {
        path: '/task/new',
        name: 'New Task',
        icon: <MdAdd size={30}></MdAdd>

    },
    {
        path: '/task/completed',
        name: 'All completed tasks',
        icon: <MdCheck size={30}></MdCheck>

    }
]
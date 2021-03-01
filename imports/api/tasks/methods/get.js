import { useTracker } from 'meteor/react-meteor-data';
import {Tasks} from '../index';
// TODO: tasks get method

const getTasks = () => {
    const tasks = useTracker(() => {
        return Tasks.find({isPrivate: false}).fetch()
    });
    return tasks
}

export default getTasks;

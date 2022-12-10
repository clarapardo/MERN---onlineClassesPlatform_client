import axios from 'axios';

class ClassService {

    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`
        })
    }

    getAllClasses = (searchFilters) => {
        return this.app.post('/filter', searchFilters);
    }
}

const classService = new ClassService()

export default classService
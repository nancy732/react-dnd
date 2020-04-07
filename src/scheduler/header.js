import React, { useState } from 'react'
import { Input, DatePicker, Button } from 'antd'
import moment from 'moment';
import 'antd/dist/antd.css'
import './header.scss'
export default function Header() {
    const data = moment(new Date()).format('MMM DD YYYY')
    const [date, setDate] = useState(data)
    const changeDate = (e) => {
        setDate(moment(e).format('MMM DD YYYY'))
    }
    const handleToday = () => {
        setDate(data)
    }
    return (
        <div className="header-style">
            <div className="input-style">
                <Input placeholder="Name" name="Name" />
            </div>
            <div className="style">
                <DatePicker onChange={changeDate} placeholder={data} />
                <Button onClick={handleToday}>Today</Button>
            </div>
            <div>
                <label className="date-style">{date}</label>
            </div>
        </div>
    )
}
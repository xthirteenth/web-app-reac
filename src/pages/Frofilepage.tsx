import { Routes, Route, Link } from 'react-router-dom'
import './pages.css/Profilepage.css'
import { TopUp } from './Topuppage'
import { Button } from "@mui/material"

const Profile = () => {
    const mockUserData = {
        userId: "ID12345",
        password: "••••••••",
        referrals: "5",
        rewards: "100",
        balance: "1000"
    };

    return (
    <div className='container'>   
        <div>
            <Routes>
                <Route path='/topup' element={<TopUp />}/>
            </Routes>
        </div>

        <div className='top-block'>
            <div className="info-row">
                <span className="info-label">Юзер айди:</span>
                <span className="info-value">{mockUserData.userId}</span>
            </div>
            <div className="info-row">
                <span className="info-label">Пароль:</span>
                <span className="info-value">{mockUserData.password}</span>
            </div>
            <Button 
                variant="text" 
                className="button-all"
            >
                <p className="button-all-text-color">Изменить пароль</p>
            </Button>
        </div>

        <div className='middle-block'>
            <div className="info-row">
                <span className="info-label">Рефералы:</span>
                <span className="info-value">{mockUserData.referrals}</span>
            </div>
            <div className="info-row">
                <span className="info-label">Награды:</span>
                <span className="info-value">{mockUserData.rewards}</span>
            </div>
            <Button 
                variant="text" 
                className="button-all"
            >
                <p className="button-all-text-color">Пригласить</p>
            </Button>
        </div>

        <div className='bottom-block'>
            <div className="info-row">
                <span className="info-label">Баланс:</span>
                <span className="info-value">{mockUserData.balance}</span>
            </div>
            <Button 
                component={Link} 
                to="/topup" 
                variant="text" 
                className="button-all"
            >
                <p className="button-all-text-color">Пополнить счет</p>
            </Button>
        </div>
    </div>
    )
}

export {Profile}
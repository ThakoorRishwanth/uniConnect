import '../styles/auth.css'
import { FeatureCard } from '../components/auth/FeatureCard'
import { AuthTabs } from '../components/auth/AuthTabs'
import { MessageSquare, Video, StickyNote, CheckSquare} from 'lucide-react'

export const AuthPage = () => {
  return (
    <>
    <div id="authContainer">
        <div className="auth-left">
            <h1 className="auth-title">UniConnect</h1>
             <p className="auth-subtitle">
           All-in-one platform for communication and collaboration
        </p>

        <div className="features-list">
            <FeatureCard icon={<MessageSquare style={{color:'#2d66dc'}}/>}  bgColor="#dae9ff"  title="Real-time Messaging" desc="Chat instantly with your team"/>
            <FeatureCard icon={ <Video style={{color:'#8120c8'}}/>} bgColor="#f4e8ff" title="Video Calls & Meetings" desc="Connect face-to-face anywhere"/>
            <FeatureCard icon={ <StickyNote style={{color:'#1ba95a'}}/>} bgColor="#d9fae2" title="Notes & Media" desc="Keep everything organized"/>
            <FeatureCard icon={ <CheckSquare style={{color:'#ee4c03'}} />} bgColor="#fceed1" title="Task Management" desc="Stay on top of your work"/>
        </div>
        </div>


        <div className='auth-right' style={{display: 'flex', justifyContent: 'center'}}>

            <AuthTabs/>
        </div>
    </div>
    </>
  )
}

import React from 'react'
import { 
    FaCar, 
    FaCheckCircle,
    FaIndustry,
    FaCarSide, 
    FaCalendarAlt,
    FaRoad,
    FaCogs,
    FaGasPump,
    FaTachometerAlt,
    FaWrench,
    FaCircle,
    FaPalette,
    FaDoorClosed,
    FaClipboardList,
    FaTag,
    FaDollarSign,
    FaMoneyBillAlt,
    FaIdCard,
    FaFileAlt,
    FaTags} from 'react-icons/fa'

    const iconMap = {
        FaClipboardList: <FaClipboardList/>,
        FaTag: <FaTag/>,
        FaDollarSign: <FaDollarSign/>,
        FaMoneyBillAlt: <FaMoneyBillAlt/>,
        FaCar: <FaCar />,
        FaCheckCircle: <FaCheckCircle/>,
        FaIndustry: <FaIndustry />,
        FaCarSide: <FaCarSide />,
        FaCalendarAlt: <FaCalendarAlt/>,
        FaRoad: <FaRoad/>,
        FaCogs: <FaCogs/>,
        FaGasPump: <FaGasPump/>,
        FaTachometerAlt: <FaTachometerAlt/>,
        FaWrench: <FaWrench/>,
        FaCircle: <FaCircle/>,
        FaPalette: <FaPalette/>,
        FaDoorClosed: <FaDoorClosed/>,
        FaIdCard: <FaIdCard/>,
        FaTags: <FaTags />,
        FaFileAlt: <FaFileAlt/>
    }
const IconField = ({icon}) => {
  return (
    <div className='text-[#405ef2] bg-blue-100 rounded-full p-1.5'>
      {iconMap[icon]}
    </div>
  )
}

export default IconField

import React,{useState, useEffect} from 'react';
import LevelCard from './components/levelCard';
import grass_icon1 from '@/assets/icons/grass_icon1.png';
import grass_icon2 from '@/assets/icons/grass_icon2.png';
import xianrenzhang_icon from '@/assets/icons/xianrenzhang_icon.png';
import sun from '@/assets/icons/sun.png';
import avtor from "@/assets/images/avtor.png";
import { Image } from 'antd-mobile';
import {
    LevelBox,
    LevelContentBox,
    AuthorLevel,
    InfoCard
} from './styled';
import Title from "@/common/title";
import TopNav from "@/common/TopNav";
import { LeftOutline } from 'antd-mobile-icons'
import {
    useHistory,
  } from 'react-router-dom';
import { getLevels } from '@/api';
import Skeletons from "@/common/skeletons";
const UserPage = () => {
    const [levelsData, setLevelsData] = useState();
    const cards = [
        [grass_icon1, grass_icon2, grass_icon2, grass_icon2, grass_icon2],
        [grass_icon1, grass_icon1, grass_icon2, grass_icon2, grass_icon2],
        [grass_icon1, grass_icon1, grass_icon1, grass_icon2, grass_icon2],
        [grass_icon1, grass_icon1, grass_icon1, grass_icon1, grass_icon2],
        [grass_icon1, grass_icon1, grass_icon1, grass_icon1, grass_icon1],
    ];
    const history = useHistory();
    useEffect(() => {
        getLevels().then(res => {
            console.log(res,'oooooooooo');
            setLevelsData(res)
        })
    }, [])
    let toBack=()=>{
        history.goBack();
    }
    return (
        levelsData ?
        <LevelBox>
            <div className='top'>
                <TopNav back={null}  left={<span style={{ fontWeight: 'bold' }}><LeftOutline onClick={toBack}/>Recharge</span>}  right="English"/>
            </div>
            <AuthorLevel>
                <Image
                    src={sun}
                    width={30}
                    height={30}
                    fit='cover'
                    className='sun'
                />
                <InfoCard >

                    <div className='author'>
                        <Image
                            src={avtor}
                            width={30}
                            height={30}
                            fit='cover'
                            style={{ borderRadius: 50 }}

                        />
                        <div className="icons">
                            {cards[3].map((item, index) => <Image
                                src={item}
                                width={21}
                                height={21}
                                fit='cover'
                                key={index}
                            />)}
                        </div>
                        <div className="level">
                            Level 4 environmentalist
                        </div>
                    </div>
                    <div className='des'>The higher the environmental protection level, the higher the income, and the richer the rights and interests!</div>
                </InfoCard>
            </AuthorLevel>
            <LevelContentBox>
                <Title img={xianrenzhang_icon} name="Environmental protection level" weight="bold" />
                {cards.map((item, index) => <LevelCard key={index} icons={item} item={levelsData[index]} index={index} />)}
            </LevelContentBox>
        </LevelBox> :
        <Skeletons/>
    )
}


export default UserPage;
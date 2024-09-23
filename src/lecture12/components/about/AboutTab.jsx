import TabMenu from "../TabMenu";
import TabContents from "../TabContents";
import { useState } from "react";

const initTabs = [
    {menu : '탭메뉴1', contents : '탭 내용1 입니다.'},
    {menu : '탭메뉴2', contents : '탭 내용2 입니다.'},
    {menu : '탭메뉴3', contents : '탭 내용3 입니다.'},
    {menu : '탭메뉴4', contents : '탭 내용4 입니다.'},
]

export default function AboutTab() {
    const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='about_tab'>
        <h2>About</h2>
        <TabMenu tabs={initTabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabContents tabs={initTabs} activeTab={activeTab}></TabContents>
    </div>
  );
}
export default function TabContents({tabs, activeTab}) {
    return (
      <div className="tab_contents">
          {tabs.map((tab, index) => (
              // activeTab === index && 
              <div key={tab.menu} className={`content ${activeTab === index ? 'active' : ''}`}>
                  {tab.contents}    
              </div>
          ))}
      </div>
    )
  }
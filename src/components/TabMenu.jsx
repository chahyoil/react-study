export default function TabMenu({tabs, activeTab, setActiveTab}) {
  return (
    <div className="tab_menu">
        {tabs.map((tab, index) => (
            <button type='button' key={tab.menu}
                className={activeTab === index ? 'active' : ''}
                onClick={() => setActiveTab(index)}>
                {tab.menu}
            </button>
        ))}
    </div>
  )
}

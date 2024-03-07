function Sentiment(){
    
    const analystItems = [
            { label: 'Buy', color: '#3498db' },
            { label: 'Hold', color: '#2ecc71' },
            { label: 'Sell', color: '#e74c3c' },
        ];

 return (
    <div className="container">
        <h1  className="heading">Sentiment</h1>
        <h2 className="light-heading">Key Events</h2>
        <div className="card-section">
            <div class="cards-wrapper">

                <div class="card blue-card">
                   <div className="card-content">
                   <h3>
                   Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim. 
                    </p>
                </div>


                </div>
                
                <div class="card green-card">
                   <div className="card-content">
                   <h3>
                   Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim. 
                    </p>
                </div>


                </div>

                <div class="card blue-card">
                   <div className="card-content">
                   <h3>
                   Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim. 
                    </p>
                </div>


                </div>
            </div>
        </div>

        <h2 className="light-heading">Analyst Estimates</h2>
        <div className="analyst">
            <div className="analyst-percent">
                76%
            </div>
            
            <ul className="analyst-list">
                {analystItems.map((item, index) => (
                    <li key={index}>
                        {item.label}
                        <div className="progress-bar" style={{ backgroundColor: item.color }}></div>
                    </li>
                ))}
        </ul>
        </div>

    </div>
 )

}

export default Sentiment;
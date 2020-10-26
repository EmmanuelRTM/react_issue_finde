import React from 'react';

class IssueCard extends React.Component{

    render(){
        return(
                
                //<div className="big-container">

                
                        this.props.information.filter((data) =>{
                            return data.title.includes(this.props.filter);
                        }).map(data=>{
                            console.log("hallo 1234: ",data.title);
                            return(
                                <div className="image-container" key ={data.id}>
                                    <h1>
                                        {data.title}
                                    </h1>
                                    <a className="links-issue" href={data.html_url}>{data.html_url}</a>
                                </div>
                                //<DataField key={data.id} data={data} />
                            )
                        })
                

                //</div>
        );
    }
}
/*<img src={this.props.url} alt="" className="image-view"></img> */
export default IssueCard;
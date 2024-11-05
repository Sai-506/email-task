import React, {useState} from 'react';
import './index.css';

const EmailList = ({ emails, onEmailClick, filter }) => {
  // Filter emails based on the selected filter
//   const filteredEmails = emails.filter(email => {
//     // Implement filter logic based on your requirements
//     return true; // Just for the example, returning all
//   });

const [searchInput,changeSearchInput] = useState("");

const filteredEmails = emails.filter(eachItem => {
  if(eachItem.type !== filter){
      return false;
  }
  return eachItem;
})

const newFilteredData = filteredEmails.filter(eachItem => {
  if(!(eachItem.sender.toLowerCase().includes(searchInput.toLowerCase()))){
    return false;
  }
  return eachItem;
})

const changeInput = (event) => {
  changeSearchInput(event.target.value);
}

  return (
    <div>
        <div className = "input-con">
        <input type = "serach" className = "input-el" placeholder = "Search" onChange = {changeInput}/>
      </div>
    <div className="email-list">
      {newFilteredData.map((email) => (
        <div key={email.id} className="email-item" onClick={() => onEmailClick(email)}>
            <div className = "text-part-1">
                <h4>{email.title}</h4>
                <p>{email.sender}</p>
            </div>
            <b className = "date">{email.date}</b>
        </div>
      ))}
    </div>
    </div>
  );
};

export default EmailList;
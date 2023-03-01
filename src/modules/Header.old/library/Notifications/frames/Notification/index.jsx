import React, { Component } from 'react'

import { getCookie } from 'library/redux/reducers/common/action'

import moment from 'moment'

import styles from './index.module.scss'

class Notification extends Component {
	constructor(props) {
		super(props);
	}
	
	state = {
    options: {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    },
    item: {}
  }

  componentDidMount() {
    this.setState({item: this.props.item})
  }

  showDate = () => {
  	let 
  		time = moment(this.props.date),
  		diffTime = moment(time).fromNow();

  	if(diffTime <= 24) {
  		return moment(time).fromNow()
  	} else  {
  		return time.toLocaleString('ru', this.state.option)
  	}
  }

  readNotification = () => {
  	if(!this.state.item.is_readed) {
	    fetch(`/api/v1/notifications/notification/${this.state.item.id}/read_status/`, {
	      method: 'PATCH',
	      headers: {
	        'User-Agent': 'Console app',
	        'Accept': 'application/json',
	        'Content-Type': 'application/json',
	        'Authorization': 'Token ' + getCookie('token')
	      },
	      body: JSON.stringify({
	        "is_readed": true
	      })
	    })
  	}
  	this.props.open(this.props.item.id)
  }

	render() {
		return (
			<div 	className={styles.notice__list__item}
        		onClick={() => this.readNotification()}>
        <p className={styles.notice__title} dangerouslySetInnerHTML={{__html: this.props.title}}></p>
        <p className={styles.notice__time}>
        	{(new Date(this.state.item.created)).toLocaleString('ru', this.state.options)}
        	{/*this.showDate()*/}
        </p>
      </div>
		)
	}
}

export default Notification
import React, { Component, useState } from 'react'
import OverflowScrolling from 'react-overflow-scrolling';
import { Button, Modal } from 'antd';
import axios from 'axios'
import { api } from './api_config';

class Details extends Component {

  constructor() {
    super();
    this.state = {
      isModalOpen: false,
      videoUrl:'',
      youKey:''
    }
  }

  showModal = async() => {
    const res=await axios({
      url:`https://api.themoviedb.org/3/movie/${this.props?.movie?.movieId}/videos?api_key=${api}`,
      method:'GET'
    })
    // console.log("res===",res?.data?.results[0]?.key)
    this.setState({youKey:res?.data?.results[0]?.key})
    this.setState({videoUrl:`https://www.youtube.com/embed/${res?.data?.results[0]?.key}`
  })
    this.setState({ isModalOpen: true });
  };
  handleOk = () => {
    this.setState({ isModalOpen: false });
  };
  handleCancel = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    let language_code = ""
    if (this.props.movie.lang === "en") {
      language_code = "English"
    } else if (this.props.movie.lang === "zh") {
      language_code = "Chinese"
    } else if (this.props.movie.lang === "fr") {
      language_code = "French"
    } else if (this.props.movie.lang === "de") {
      language_code = "German"
    } else if (this.props.movie.lang === "it") {
      language_code = "Italian"
    } else if (this.props.movie.lang === "ja") {
      language_code = "Japanese"
    } else if (this.props.movie.lang === "ko") {
      language_code = "Korean"
    } else if (this.props.movie.lang === "ru") {
      language_code = "Russian"
    } else if (this.props.movie.lang === "th") {
      language_code = "Thai"
    } else if (this.props.movie.lang === "es") {
      language_code = "Spanish"
    } else if (this.props.movie.lang === "pt") {
      language_code = "Portuguese"
    } else {
      language_code = this.props.movie.lang
    }

    return (
      <div className="details">
        <Modal
        title="Trailer" open={this.state.isModalOpen} onOk={this.handleOk} onCancel={this.handleCancel}>
        
        <iframe
                                    width="100%"
                                    height="480"
                                    src={this?.state?.videoUrl}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Embedded youtube"
                                />
          
        </Modal>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => this.props.selClick([])}>Go Back</button>
        <div className="detail_bg" style={{
          background: `url("https://image.tmdb.org/t/p/original/${this.props.movie.image}")`,
          height: '550px',
          backgroundSize: '101%, cover',
          backgroundPosition: 'center, center',
          width: '100%',
          backgroundRepeat: "no-repeat"
        }}>
          <div onClick={() => this.showModal()}>

            <img className="detail_po" src={`https://image.tmdb.org/t/p/w200/${this.props.movie.poster}`} alt="Movie Poster" />
          </div>
          <div className="details_content">
            <OverflowScrolling className='overflow-scrolling'>
              <div className="details_scroll">
                <h3><b className='textDetail'>{this.props.movie.title}</b>&nbsp;(<b>{this.props.movie.released.slice(0, 4)}</b>)</h3>
                <div className="detail_info">
                  <h5>User Score</h5>
                  <h5><b className='textDetail_2'>{this.props.movie.rating}</b></h5>
                </div>
                <div className="detail_info">
                  <h5>Language</h5>
                  <h5><b className='textDetail_2'>{language_code}</b></h5>
                </div>
                <div className="detail_info">
                  <h5>Release Date</h5>
                  <h5><b className='textDetail_2'>{this.props.movie.released}</b></h5>
                </div>
                <div className="detail_info">
                  <h5>Genre</h5>
                  <h5><b className='textDetail_2'>{this.props.movie.genre[0]}</b></h5>
                </div>
                <h5>OVERVIEW</h5>
                <h5><b className='textDetail_2'>{this.props.movie.overview}</b></h5>
              </div>
            </OverflowScrolling>
          </div>
        </div>
      </div>
    )
  }
}
export default Details
import React, { Component } from 'react';
import { FaTwitter, FaGithub } from "react-icons/fa";
import { TWITTER_URL, GITHUB_URL, PROFILE } from '../../constants';



export default class Footer extends Component {
  render () {
    return (
      <div className="p-wrapper__footer">
        <footer className="footer">
          <div className="container">
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <div className="is-flex p-footer__profile">
                  <figure className="image is-128x128">
                    <img className="is-rounded" src="/static/inomar_icon_128x128.webp" alt="my profile image" />
                  </figure>
                  <div className="p-footer__profileText">
                    <p className="p-footer__profileName">
                      {
                        PROFILE.NAME
                      }
                    </p>
                    <p className="p-footer__profileSubTitle">
                      {
                        PROFILE.POSITION
                      }
                    </p>
                    <div className="">
                      <a href={TWITTER_URL} target="_blank" className="p-header__icon"><FaTwitter /></a>
                      <a href={GITHUB_URL} target="_blank" className="p-header__icon"><FaGithub /></a>
                    </div>
                    <p>
                      {
                        PROFILE.DESCRIPTION
                      }
                    </p>
                  </div>
                </div>
                <div className="content has-text-centered">
                  <p className="p-footer__copy">2017 &copy;不定期更新症候群 / Produced by inomar</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
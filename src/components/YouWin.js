import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
} from "react-share";

export default function YouWin({ score, mode }) {
  const shareUrl = "https://crosswordle-production.herokuapp.com/";
  const title = `I've just solved today's (${new Date().toLocaleDateString(
    "en-GB"
  )}) ${mode.toUpperCase()} CROSSWORDLE challenge in ${score} guesses - can you beat me!?`;

  return (
    <>
      <div className="container">
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p
                className="modal-card-title is-size-2 has-text-weight-bold"
                id="how-to-play-card-title"
              >
                YOU WIN!
              </p>
            </header>
            <section className="modal-card-body">
              <p>🥳 🥳 🥳 🥳 🥳</p>
              <p>🥳 🥳 🥳 🥳 🥳</p>
              <p className="has-text-weight-bold">
                {" "}
                You got the correct answer in
              </p>
              <p className="has-text-weight-bold">
                {" "}
                {score} {score === 1 ? "guess, WOW!" : "guesses!"}{" "}
              </p>
              <p>🥳 🥳 🥳 🥳 🥳</p>
              <p>🥳 🥳 🥳 🥳 🥳</p>
            </section>
            <footer className="modal-card-foot">
              <div className="networks columns">
                <div className="column is-one-third">
                  <p>Share your score:</p>
                </div>
                <div className="network column">
                  <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="network__share-button"
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                </div>

                <div className="network column">
                  <TwitterShareButton
                    url={shareUrl}
                    title={title}
                    className="network__share-button"
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </div>

                <div className="network column">
                  <TelegramShareButton
                    url={shareUrl}
                    title={title}
                    className="network__share-button"
                  >
                    <TelegramIcon size={32} round />
                  </TelegramShareButton>
                </div>

                <div className="network column">
                  <WhatsappShareButton
                    url={shareUrl}
                    title={title}
                    separator=":: "
                    className="network__share-button"
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                </div>

                <div className="network column">
                  <LinkedinShareButton
                    url={shareUrl}
                    className="network__share-button"
                  >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </div>

                <div className="network column">
                  <RedditShareButton
                    url={shareUrl}
                    title={title}
                    windowWidth={660}
                    windowHeight={460}
                    className="network__share-button"
                  >
                    <RedditIcon size={32} round />
                  </RedditShareButton>
                </div>
                <div className="column"></div>
                <div className="column"></div>
                <div className="column"></div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

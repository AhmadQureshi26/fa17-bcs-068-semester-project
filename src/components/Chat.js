import React, { Component } from "react";
import "../css/chat.css";
import store from "../store/store";
import { connect } from "react-redux";
import { loadUserChat } from "../actions/loadUserChat.js";
import { sendMessage } from "../actions/sendMessage";
import { startListenToChatMessages } from "../Firebase/firebase";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.loadChat = this.loadChat.bind(this);
  }

  sendMesg(e) {
    e.preventDefault();
    let message = e.target.elements.message;
    let resId = store.getState().singleChatReducer.resID;
    console.log("in sending message is:", message.value);
    console.log("resId is:", resId);

    store.dispatch(
      sendMessage(store.getState().authReducer.uid, resId, message.value)
    );
    message.value = "";
  }

  loadChat(resID) {
    console.log("user chat required by chat comp");
    let uid = store.getState().authReducer.uid;
    store.dispatch(loadUserChat(uid, resID));
    startListenToChatMessages(uid, resID);
  }

  render() {
    return (
      <div>
        <div class="container">
          <h3 class=" text-center">Messaging</h3>
          <div class="messaging">
            <div class="inbox_msg">
              <div class="inbox_people">
                <div class="headind_srch">
                  <div class="recent_heading">
                    <h4>Recent</h4>
                  </div>
                  <div class="srch_bar">
                    <div class="stylish-input-group">
                      <input
                        type="text"
                        class="search-bar"
                        placeholder="Search"
                      />
                      <span class="input-group-addon">
                        <button type="button">
                          {" "}
                          <i class="fa fa-search" aria-hidden="true"></i>{" "}
                        </button>
                      </span>{" "}
                    </div>
                  </div>
                </div>

                <div class="inbox_chat">
                  {this.props.chats.forEach((element) => {
                    console.log(element);
                  })}

                  {this.props.chats.map((chat) => {
                    console.log("in map");

                    console.log(chat);

                    // {console.log()}
                    return (
                      <div
                        onClick={() => {
                          console.log("clicked on chat");
                          this.loadChat(chat.to);
                        }}
                        className="chat_list active_chat"
                        // id={chat.to}
                      >
                        <div class="chat_people">
                          <div class="chat_img">
                            {" "}
                            <img
                              src="https://ptetutorials.com/images/user-profile.png"
                              alt="sunil"
                            />{" "}
                          </div>
                          <div class="chat_ib">
                            <h5>
                              {chat.userName}
                              <span class="chat_date">Dec 25</span>
                            </h5>
                            <p>
                              {chat.messages.length === 0
                                ? "no messages yet"
                                : chat.messages[chat.messages.length - 1]
                                    .messageBody}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div class="mesgs">
                {/*  */}
                {/* {console.log("user messages")}
                {console.log(this.props.userMessages)} */}
                <div class="msg_history">
                  {this.props.userMessages.map((message) => {
                    if (message.sent === false) {
                      return (
                        <div class="incoming_msg">
                          <div class="incoming_msg_img">
                            {" "}
                            <img
                              src="https://ptetutorials.com/images/user-profile.png"
                              alt="sunil"
                            />{" "}
                          </div>

                          <div class="received_msg">
                            <div class="received_withd_msg">
                              <p>{message.messageBody}</p>
                              <span class="time_date">
                                {" "}
                                {message.createdAt}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    } else if (message.sent === true) {
                      return (
                        <div class="outgoing_msg">
                          <div class="sent_msg">
                            <p>{message.messageBody}</p>
                            <span class="time_date">
                              {" "}
                              {message.createdAt}
                            </span>{" "}
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
                {/*                 

                 */}
                <div class="type_msg">
                  {this.props.resID !== "" ? (
                    <div class="input_msg_write">
                      <form onSubmit={this.sendMesg}>
                        <input
                          type="text"
                          class="write_msg"
                          placeholder="Type a message"
                          name={"message"}
                        />
                        <button class="msg_send_btn" type="button">
                          <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                        </button>
                      </form>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  chats: state.allChatsReducer.chats,
  userMessages: state.singleChatReducer.messages,
  resID: state.singleChatReducer.resID,
});

export default connect(mapStateToProps)(Chat);

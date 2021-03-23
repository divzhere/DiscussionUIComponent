import React from "react";
import { FcFile } from "react-icons/fc";
import { RiReplyLine } from "react-icons/ri";
import { MdKeyboardArrowUp } from "react-icons/md";

export function Discussion(props) {
  const [showReply, setShowReply] = React.useState(false);

  return (
    <div className="discussion">
      <img src={props.replies.startedBy.avatarUrl} className="avatar" />
      <div className="post">
        <div className="posted-by">
          {props.replies.startedBy.name}
          <span className="date">{props.replies.startedBy.date}</span>
        </div>
        <div className="comment">{props.replies.comment}</div>
        <div className="file">
          <FcFile />
          <span className="file-name">{props.replies.file}</span>
        </div>
        {showReply && (
          <div className="thread">
            {props.replies.replies.map((comment) => (
              <div className="reply">
                <img src={comment.avatarUrl} className="avatar-small" />
                <div className="text">
                  <div className="reply-posted-by">
                    {comment.name}
                    <span className="date">{comment.date}</span>
                  </div>
                  <div className="comment-reply">{comment.comment}</div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="bottom-row">
          <span className="button subtitle reply-button">
            <RiReplyLine /> Reply
          </span>
          <span
            className="button collapse comment-button"
            onClick={() => {
              setShowReply(!showReply);
            }}
          >
            {showReply ? (
              "Collapse All"
            ) : (
              <span className="subtitle">
                {props.replies.replies.length} Comments
                <span className="view-all">View All</span>
              </span>
            )}
            <MdKeyboardArrowUp className={!showReply && "down"} />
          </span>
        </div>
      </div>
    </div>
  );
}

import React, { Component } from 'react';
import './comment-slide-in.scss';
import axios from 'axios';

class CommentSlideIn extends Component {

    state = {
        open: false,
        taskName: '',
        commentText: '',
        commentList: this.props.commentList,
        currentTask: 'Current task name'
    }

   

    handleChange = ({ target: { value, name } }) => {
        this.setState({
            [name]: value
        })
    }

    taskNameChange = () => {
        console.log(this.props.taskID, this.state.taskName)
        axios.put('/api/task/name', { taskID: this.props.taskID, name: this.state.taskName })
    }

    addComment = () => {
        console.log(this.props.taskID)
        console.log(this.state.commentText)
        axios.post('/api/comment', { taskID: this.props.taskID, content: this.state.commentText })
            .then(response => {
               this.props.updateComment(response.data)
               
            })
            this.setState=({commentText:''})
    }



    render() {

        console.log(this.props.commentList)

        const taskCommentList = this.props.commentList.map((task, i) => {
            return (
                <div
                    key={i}
                    className="comment-container"
                >
                    <div className="inner-comment">
                        <div className="comment-info">
                            <div className="name-pic">
                                <div
                                    id="pic" 
                                    style={{
                                        backgroundColor: '#fb275d',
                                        height: '25px',
                                        width: '25px',
                                        borderRadius: '50%',
                                        backgroundImage: `url(${task.author_pic})`,
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                
                                />
                                {task.author}
                            </div>
                            <div>{task.time_posted}</div>
                        </div>
                        <div className="content">
                            {task.content}
                        </div>
                    </div>
                </div>
            )
        })

        return (

            <div
                className="slide-in-container"
                style={{
                    transform: this.props.open ? 'translateX(0px)' : 'translateX(550px)'
                }}
            >
                <div className="content-container">
                    <div
                        id="close-button"
                        onClick={this.props.close}
                    >
                        X
                    </div>
                    <form
                        onSubmit={e => { e.preventDefault(); this.taskNameChange() }}
                    >
                        <input
                            className="title-input"
                            type="text"
                            placeholder={this.props.taskName}
                            name="taskName"
                            onChange={this.handleChange}
                        />
                    </form>
                    <div className="divider" />
                    <form
                        onSubmit={e => { e.preventDefault(); this.addComment() }}
                    >
                        <input
                            className="comment"
                            placeholder="Write an update..."
                            name="commentText"
                            value={this.state.commentText}
                            onChange={this.handleChange}
                        />
                    </form>
                    {taskCommentList}
                </div>
            </div>

        )
    }
}

export default CommentSlideIn;
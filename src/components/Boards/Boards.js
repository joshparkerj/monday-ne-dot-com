import React, { Component } from 'react';
import axios from 'axios';
import CommentSlideIn from '../CommentSlideIn/CommentSlideIn';
import BoardRow from './BoardRow';
import './boards.scss';

class Boards extends Component {

  state = {
    boardID: this.props.board_id,
    selectedRow: -1,
    selectedCol: '',
    items: [],
    commentList: [],
    open: false,
    taskName: '',
    selectedDay: null,
    commentText:'',
  };

  updateCell = row => {
    return (col, taskName) => {
      if (col === 'name') this.openCommentSlideIn(row);
      this.setState({
        selectedRow: row,
        selectedCol: col,
        taskName: taskName
      });
    }
  }

  checkSelected = (row,col) => {
    return row === this.state.selectedRow && col === this.state.selectedCol;
  }

  taskNameChange = () => {
    console.log(this.state.selectedRow, this.state.taskName)
    axios.put('/api/task/name', { taskID: this.state.selectedRow, name: this.state.taskName })
    this.setState({
        items: this.state.items.map(item => {
            if (item.id === this.state.selectedRow){
                item.name = this.state.taskName
            }
            return item
        })
    })
}
    handleChange = ({ target: { value, name } }) => {
        this.setState({
            [name]: value
        })
    }
  openCommentSlideIn = id => {
    axios.get(`/api/comment/on-task/${id}`)
      .then(response => {
        const list = response.data.reverse()
        this.setState({commentList: list})
      })
    this.setState({
        open: true,
        commentList: [],
    })

  }

  handleSlideInClose = () => {
    this.setState({
      open: false,
      commentList: []
    })
  }

  // add axios request to create row
  componentDidMount() {
    axios.get(`/api/task/by-board/${this.props.board_id}`)
      .then(({ data }) => this.setState({ items: data }))
    document.addEventListener('click', e => e.target.focus())
  }

  addRowOnEnter = ({ key, target, target: { value } }) => {
    if (key === 'Enter') {
      target.value = ""
      axios.post("/api/task", {
        boardID: this.state.boardID,
        name: value
      }).then(task => {

          this.setState({
            items: this.state.items.concat(task.data)});

      })
    }
  }

  updateCommentList = (newComment) => {
    this.setState({
      commentList: [newComment, ...this.state.commentList]
    })
  }

  itemMapper = (item, index) => {
    return (
      <BoardRow
        item={item}
        key={index}
        ti={index}
        checkSelected={this.checkSelected}
        uc={this.updateCell}
        selectedDay={this.state.selectedDay}
      />
    )
  }

  render = () => {
    const { state: { items }, addRowOnEnter } = this;
    const { board_name } = this.props;
    return (
      <div className="board-wrapper">
        <CommentSlideIn
          open={this.state.open}
          taskID={this.state.selectedRow}
          commentList={this.state.commentList}
          updateComment={(comment) => this.updateCommentList(comment)}
          taskName={this.state.taskName}
          closePanel={this.handleSlideInClose}
          updateTaskName={this.taskNameChange}
          handleChange={this.handleChange}
        />
        <table>
          <thead>
            <tr>
              <th style={{ width: "400px" }}>
                <h4>{board_name}</h4>
              </th>
              <th>Owner</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Person</th>
              <th>Time Est.</th>
            </tr>
          </thead>
          <tbody>
            {items.map(this.itemMapper)}
          </tbody>
        </table>
        <input
          className="add-row-input"
          onKeyDown={addRowOnEnter}
          placeholder="+ Add a task"
        />
      </div>);
    }

}

export default Boards;

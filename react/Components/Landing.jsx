import React, {Component} from 'react';
import axios from 'axios';
import '../styles/Landing.css'

export default class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    axios.get('/api/blog').then((response) => {
      var blogs = response.data.sort((b, a) => a.date > b.date).map(c => {
        return (
          <div key={c.id} className="blogs_container border_radius box_shadow">
            <div className="flex">
              <div className="inline self_align_bottom h3">{c.title}</div>
              <i className="italic self_align_bottom">{new Date(c.date).toLocaleDateString()}</i>
            </div>

            <hr></hr>
              <div dangerouslySetInnerHTML={ {__html: c.body} }></div>

          </div>
        )
      });

      this.setState({'blogs': blogs})
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <h1 className="dev_dev_title box_shadow border_radius">developer_Developer</h1>
        {this.state.blogs}
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'
import chris from '../src/img/chris.jpg'
import paul from '../src/img/paul.jpg'

// Main component
class App extends Component {
    componentDidMount(){
        document.body.className=''
    }
    render(){
        return (
            <div>

                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/work">Work</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                { this.props.children }
            </div>
        )
    }
}

// Pages
class Home extends Component {
    render(){
        return (
            <div>
              <section className="team">
              <h1>Who We Are</h1>
                  <div className="members centered">
                      <div className="chris" title="Co-Founder" firstname="Chris" lastname="Wirth">
                          <img src={ chris } alt="" />
                          <h2>Chris Wirth</h2>
                          <h3>Co-Founder | Developer</h3>
                      </div>
                      <div className="paul" title="Co-Founder" firstname="Paul" lastname="Butler III">
                          <img src={ paul } alt="" />
                          <h2>Paul Butler III</h2>
                          <h3>Co-Founder | Developer</h3>
                      </div>
                  </div>

              </section>
            </div>
        )
    }
}
class About extends Component {
    render(){
        return (
            <div>
                <h2>About</h2>
                <div>Some about page content</div>
            </div>
        )
    }
}
class Work extends Component {
    render(){
        return (
            <div>
                <h2>Work</h2>
                <div>Some work page content</div>
            </div>
        )
    }
}
class Contact extends Component {
    render(){
        return (
            <div>
                <h2>Contact</h2>
                <div>Some contact page content</div>
            </div>
        )
    }
}
class NoMatch extends Component {
    render(){
        return (
            <div>
                <h2>NoMatch</h2>
                <div>404 error</div>
            </div>
        )
    }
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
        <Route path="work" component={Work}/>
        <Route path="contact" component={Contact}/>
        <Route path="*" component={NoMatch}/>
    </Route>
)
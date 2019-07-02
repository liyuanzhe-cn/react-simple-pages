import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment
} from "semantic-ui-react";
import ResponsiveContainer from "../containers/ResponsiveContainer";
import { Link } from "react-router-dom";
import img from '../asset/lyz.jpg';
import githubImage from '../asset/github.png';

const HomePage = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              欢迎来到我的简介网站
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              本人是一名前端开发，曾经是葡语翻译， 2018年年初接触开发，最开始学了两个月Python语言，之后开始学习web前端， 并出于兴趣一直在学习前端， 并打算把开发作为长期职业发展。
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src={img}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              简介
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              点击 <Link to="/cv">这里</Link>查看我的简历.
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Github 仓库
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image
                avatar
                src={githubImage}
                href="https://github.com/liyuanzhe-cn"
                target="_blank"
              />
              点击{" "}
              <a
                href="https://github.com/liyuanzhe-cn"
                target="_blank"
                rel="noopener noreferrer"
              >
                这里
              </a>{" "}
              前往我的仓库.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          葡萄牙生活黄页
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          前端部分已上线，微信可搜索，是本人在2019年1月份开发的项目， 是葡萄牙同城人人帮的轻量版本， 提供便民生活服务的查询功能。
        </p>

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <Link to="/projects">其他项目</Link>
        </Divider>
        <Header as="h3" style={{ fontSize: "2em" }}>
          葡萄牙同城人人帮
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          本人负责该项目的版本更新迭代和维护，该项目提供生活便民服务，如招聘，租房，律师，商店，机票，旅行社等便民服务信息，最大程度让当地华人找到相应的便民生活服务。
        </p>

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <Link to="/projects">其他项目</Link>
        </Divider>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Samurai日料店连锁店网站
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          使用jquery和jquery插件开发的三语言站点MPA应用。
        </p>
        <Button
          as="a"
          size="large"
          href="https://samurai.pt"
          target="_blank"
        >
          打开
        </Button>
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item
                  as="a"
                  href="https://github.com/liyuanzhe-cn"
                  target="_blank"
                >
                  Github
                </List.Item>
                <List.Item as={Link} to="projects">
                  我的项目
                </List.Item>
                <List.Item as={Link} to="cv">
                  个人简历
                </List.Item>
                <List.Item as={Link} to="contact">
                  联系我
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Technologies" />
              <List link inverted>
                <List.Item
                  as="a"
                  href="http://es6-features.org/#Constants"
                  target="_blank"
                >
                  ES6
                </List.Item>
                <List.Item
                  as="a"
                  href="https://vuejs.org/"
                  target="_blank"
                >
                  VUE
                </List.Item>
                <List.Item
                  as="a"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                >
                  Javascript
                </List.Item>
                <List.Item as="a" href="https://reactjs.org/" target="_blank">
                  React
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                李沅哲
              </Header>
              <p>WEB前端</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default HomePage;

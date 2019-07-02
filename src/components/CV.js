import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  List,
  Segment
} from "semantic-ui-react";
import ResponsiveContainer from "../containers/ResponsiveContainer";
import { Link } from "react-router-dom";

const CV = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Divider
        as="h4"
        className="header"
        horizontal
        style={{ margin: "2em 0em", textTransform: "uppercase" }}
      >
        <Header as="h1" style={{ fontSize: "3em" }}>
          简介
        </Header>
      </Divider>
      <Grid container celled="internally" stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column>
            <Header as="h3" style={{ fontSize: "2em" }}>
              关于我：
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              web前端一名，掌握HTML5, CSS3, VUE, REACT, Express框架。
               <br />
              本人热爱计算机技术，留学期间（通过YouTube，腾讯课堂，文档博客，stackoverflow等渠道）自学钻研WEB前端开发技术， 掌握Vue，React、Node， Express和数据库，开发经验多个前后端分离项目，喜欢精益求精， 英语词汇量丰富， 理解英文技术文档， 并打算将开发工作作为未来长期发展的事业。
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid
        celled="internally"
        columns="equal"
        stackable
        style={{ paddingBottom: "2em", paddingTop: "2em" }}
      >
        <Grid.Row textAlign="center">
          <Grid.Column
            width={6}
            style={{ paddingBottom: "2em", paddingTop: "2em" }}
          >
            <Header as="h3" style={{ fontSize: "2em" }}>
              开发项目
            </Header>
            <p style={{ fontSize: "1.33em" }}>个人 & 企业</p>
          </Grid.Column>
          <Grid.Column>
            <Grid.Row
              align="left"
              style={{
                paddingBottom: "1em"
              }}
            >
              <Header
                as="h3"
                style={{
                  fontSize: "2em"
                }}
              >
                葡萄牙生活黄页
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                前端部分已上线，微信可搜索，是本人在2019年1月份开发的项目， 是葡萄牙同城人人帮的轻量版本， 提供便民生活服务的查询功能。
              </p>
            </Grid.Row>
            <Grid.Row
              style={{
                paddingBottom: "1em"
              }}
              align="left"
            >
              <Grid.Column
                textAlign="center"
                style={{
                  paddingBottom: "2em"
                }}
              >

              </Grid.Column>
            </Grid.Row>
            <Grid.Row
              align="left"
              style={{
                paddingBottom: "1em"
              }}
            >
              <Header
                as="h3"
                style={{
                  fontSize: "2em"
                }}
              >
                葡萄牙同城人人帮
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                本人负责该项目的版本更新迭代和维护，该项目提供生活便民服务，如招聘，租房，律师，商店，机票，旅行社等便民服务信息，最大程度让当地华人找到相应的便民生活服务。
              </p>
            </Grid.Row>
            <Grid.Row
              style={{
                paddingBottom: "1em"
              }}
              align="left"
            >
              <Grid.Column
                textAlign="center"
                style={{
                  paddingBottom: "2em"
                }}
              >

              </Grid.Column>
            </Grid.Row>
            <Grid.Row
              style={{
                paddingBottom: "1em"
              }}
              align="left"
            >
              <Header as="h3" style={{ fontSize: "2em" }}>
                samurai日料店连锁店网站
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                使用jquery和jquery插件开发的三语言站点MPA应用。
              </p>
            </Grid.Row>
            <Grid.Row
              style={{
                paddingBottom: "1em"
              }}
              align="left"
            >
              <Grid.Column
                textAlign="center"
                style={{
                  paddingBottom: "2em"
                }}
              >
                <Button
                  size="large"
                  href="https://samurai.pt"
                >
                  打开
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row
              align="left"
              style={{
                paddingBottom: "1em"
              }}
            >
              <Header
                as="h3"
                style={{
                  fontSize: "2em"
                }}
              >
                李沅哲Vue博客
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                前端使用Vue框架，后端使用Express框架和mysql数据库， 实现文章展示/评论/发布/标签/搜索/登录验证/音乐播放等API。
              </p>
            </Grid.Row>
            <Grid.Row
              style={{
                paddingBottom: "1em"
              }}
              align="left"
            >
              <Grid.Column
                textAlign="center"
                style={{
                  paddingBottom: "2em"
                }}
              >
                <Button
                  size="large"
                  href="http://47.111.106.5/index.html"
                >
                  打开
                </Button>

              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid
        celled="internally"
        columns="equal"
        stackable
        style={{ paddingBottom: "2em", paddingTop: "2em" }}
      >
        <Grid.Row textAlign="center">
          <Grid.Column
            width={6}
            style={{ paddingBottom: "2em", paddingTop: "2em" }}
          >
            <Header as="h3" style={{ fontSize: "2em" }}>
              开发技能
            </Header>
            <p style={{ fontSize: "1.33em" }}>前端 & 后端</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "2em", paddingTop: "2em" }}>
            <Grid.Row
              style={{
                paddingBottom: "2em"
              }}
              align="left"
            >
              <Header as="h3" style={{ fontSize: "2em" }}>
                HTML5, CSS3,  JavaScript
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                设计模式， 算法数据结构， 微信小程序，SQL, mongoDB, React, Vue, Express, Node.js。
              </p>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid
        celled="internally"
        columns="equal"
        stackable
        style={{ paddingBottom: "2em", paddingTop: "2em" }}
      >
        <Grid.Row textAlign="center">
          <Grid.Column
            width={6}
            style={{ paddingBottom: "2em", paddingTop: "2em" }}
          >
            <Header as="h3" style={{ fontSize: "2em" }}>
              工作经历
            </Header>
            <p style={{ fontSize: "1.33em" }}>中国 & 葡萄牙</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "2em", paddingTop: "2em" }}>
            <Grid.Row
              style={{
                paddingBottom: "2em"
              }}
              align="left"
            >
              <Header as="h3" style={{ fontSize: "2em" }}>
                Aike Inf, 里斯本, 葡萄牙
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <strong>
                  <i> 2018.03 - now</i>
                </strong>
              </p>
              <p style={{ fontSize: "1.33em", paddingBottom: "1em" }}>
                主要从事PC端和移动端响应式非前后端交互类页面的开发， WEB应用的UI还原以及动画效果的实现， 网站多国语言站点的处理，二次开发/一次开发，针对客户实际需求，开发PC端和H5移动端响应式项目和微信小程序开发。
              </p>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid
        celled="internally"
        columns="equal"
        stackable
        style={{ paddingBottom: "2em", paddingTop: "2em" }}
      >
        <Grid.Row textAlign="center">
          <Grid.Column
            width={6}
            style={{ paddingBottom: "2em", paddingTop: "2em" }}
          >
            <Header as="h3" style={{ fontSize: "2em" }}>
              教育经历
            </Header>
            <p style={{ fontSize: "1.33em" }}>中国 & 葡萄牙</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "2em", paddingTop: "2em" }}>
            <Grid.Row
              style={{
                paddingBottom: "2em"
              }}
              align="left"
            >
              <Header as="h3" style={{ fontSize: "2em" }}>
                阿维罗大学 - 阿维罗, 葡萄牙
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <strong>
                  <i>2015 - 2019</i>
                </strong>
              </p>
              <p style={{ fontSize: "1.33em" }}>
                葡萄牙语硕士， 课程期间课程比较少， 2018年1月份， 在我拿到了葡语C1证书之后， 便开始学习开发，直到现在。
              </p>
            </Grid.Row>
            <Grid.Row
              style={{
                paddingBottom: "2em"
              }}
              align="left"
            >
              <Header as="h3" style={{ fontSize: "2em" }}>
                吉林外国语大学, 长春, 吉林
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <strong>
                  <i>2013 - 2017</i>
                </strong>
              </p>
              <p style={{ fontSize: "1.33em" }}>
                葡萄牙语本科， 获取CET4证书。
              </p>
            </Grid.Row>

          </Grid.Column>
        </Grid.Row>
      </Grid>
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
  </ResponsiveContainer >
);

export default CV;

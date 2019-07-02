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

const Projects = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "2em 0em", textTransform: "uppercase" }}
        >
          <Header as="h1" style={{ fontSize: "3em" }}>
            我的项目
          </Header>
        </Divider>
        <Header as="h3" style={{ fontSize: "2em" }}>
          葡萄牙生活黄页
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          前端部分已上线，微信可搜索，是本人在2019年1月份开发的项目， 是葡萄牙同城人人帮的轻量版本， 提供便民生活服务的查询功能。
        </p>
        <Divider style={{ margin: "2em 1em" }} />
        <Header as="h3" style={{ fontSize: "2em" }}>
          葡萄牙同城人人帮
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          本人负责该项目的版本更新迭代和维护，该项目提供生活便民服务，如招聘，租房，律师，商店，机票，旅行社等便民服务信息，最大程度让当地华人找到相应的便民生活服务。
        </p>

        <Divider style={{ margin: "2em 1em" }} />
        <Header as="h3" style={{ fontSize: "2em" }}>
          李沅哲Vue博客
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          前端使用Vue框架，后端使用Express框架和mysql数据库， 实现文章展示/评论/发布/标签/搜索/登录验证/音乐播放等API， 并上传到centos服务器。
        </p>

        <Button
          as="a"
          size="huge"
          href="http://47.111.106.5/index.html"
          target="_blank"
        >
          打开
        </Button>
        <Divider style={{ margin: "2em 1em" }} />
        <Header as="h3" style={{ fontSize: "2em" }}>
          pandasfly旅游
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          使用jquery 和jquery插件配合后端开发接机旅游网站， 包含登录注册，短信验证，接机，旅游线路，车型，人数，日期选择和预定等功能。（该业务被取消，项目下线）
        </p>
        <Button
          as="a"
          size="huge"
          href="http://www.ruadapalma.com/"
          target="_blank"
        >
          打开
        </Button>
        <Divider style={{ margin: "2em 1em" }} />
        <Header as="h3" style={{ fontSize: "2em" }}>
          我做过的一些前后端非交互类网站
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          <ul>
            <li>二次开发 / 一次开发</li>
            <li> <a href="https://samurai.pt"> samurai日料店连锁店网站</a></li>
            <li><a href="https://www.medicinachinesapt.com">中医门诊网站</a></li>
            <li><a href="https://wokone.pt">wokone快餐连锁店网站</a></li>
            <li><a href="https://lisboacool.com/">汉唐阁网站</a></li>
            <li> <a href="https://www.restauranteweiyayuan.pt/">味亚园餐厅网站</a></li>
            <li><a href="https://www.theoldhouseportugal.pt">老房子中餐网站</a></li>
            <li><a href="http://www.saboresdochurrasco.pt/">sabor烤肉店网站</a></li>
            <li> <a href="http://www.chinahealth.pt/">中康门诊网站</a></li>
            <li><a href="http://www.feihe.pt/">飞鹤厅自助餐网站</a></li>
            <li> 等30余个非前后端交互类项目。</li>
          </ul>
        </p>

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
export default Projects;

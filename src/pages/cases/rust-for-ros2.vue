<template>
  <layout>

    <Header
      :path="$route.path"
      introImg="ros2/banner.jpg"
      :introText="$t('Robonomics is an open-source platform that facilitates both simple IoT services and complex robotics, enabling effective communication between agents, whether they are human or robotic. To integrate robots into this system, we utilize ROS. In this article, we aim to provide an overview of our process for integrating Robonomics into ROS 2.')"
    />

    <section class="case-page layout">
      <section class="case-page__content hyphens">
        <CaseText
          :title="$t(`Why ROS 2 in Robonomics?`)"
          multiple
        >
          <p>{{ $t("ROS, the Robot Operating System, is one of the oldest open-source frameworks for robotics. It's a collection of software libraries and tools for making robots work. It has everything from the basics to advanced features and comes with handy tools for programmers. It's widely used by universities worldwide for teaching and research in robotics, so it's well-established, works with many types of robots, and has a big community of developers.") }}</p>
          <p>{{ $t("Since ROS was started in 2007, significant changes have taken place in the field of robotics and within the ROS community. As a response to these developments, ROS 2 was introduced with the aim of adapting to these changes. It builds upon the strengths of ROS 1 while addressing its limitations. We've been utilizing ROS in Robonomics from the very beginning, and now it's time for us to migrate to ROS 2.") }}</p>

          <div class="case-ros__extra">
            <b>> {{ $t('You might find this interesting') }}</b>
            <p>{{ $t('There are numerous open-source robots and complex robotic platforms that support ROS. This means you can create an impressive multi-robot system to achieve your specific objectives. For') }} <g-link to="https://robots.ros.org/">{{ $t('the most current list of supported robots') }}</g-link>, {{ $t('please visit the ROS website.') }}</p>
          </div>

          <div class="case-ros__images">
            <g-link to="https://robots.ros.org/irobot-roomba/"><g-image src="@/assets/images/cases/ros2/1.png" alt="" aria-hidden="true"/></g-link>
            <g-link to="https://robots.ros.org/mycobot/"><g-image src="@/assets/images/cases/ros2/2.png" alt="" aria-hidden="true"/></g-link>
            <g-link to="https://minipupperdocs.readthedocs.io/en/latest/index.html"><g-image src="@/assets/images/cases/ros2/3.png" alt="" aria-hidden="true"/></g-link>
            <g-link to="https://robots.ros.org/turtlebot4/"><g-image class="invert" src="@/assets/images/cases/ros2/4.png" alt="" aria-hidden="true"/></g-link>
          </div>

        </CaseText>

        <CaseText
          img="ros2/scheme.svg"
          imageOutside
          imgClasses="invert bg"
          imgAlt="How Robonomics works with ROS 2"
          :text="$t(`Let's see how ROS is used within the Robonomics framework by picturing the entire system with Robonomics acting as different layers:`)"
          class="mb-small"
        />
        
        <div class="layout__text">
          <p class="cases-ros2__text mb-big">{{ $t("On the 'Machine Interface' layer, we require tools to seamlessly connect robots with software. ROS 2 provides a robust set of developer tools perfectly suited for this task.") }}</p>
        </div>

        <CaseText
          :title="$t('Robonomics packages for ROS and ROS 2')"
          multiple
        >

        <p>{{ $t("Building a multi-robotic system often involves the challenge of connecting devices from various vendors, or even devices within a single vendor, each using different protocols. Whether it's for a smart home setup or automated manufacturing, effective communication among your machines is crucial. ROS (and, of course, ROS 2) offers various modes to address this. What if you could customize tasks while ROS manages communication between nodes?") }}</p>

        <p>{{ $t("The Robonomics team has created various packages for ROS to make robots smarter and handle specific tasks as needed. To see the tasks we've accomplished with ROS, check out our R&D cases page. Almost every interaction with a robot relies on ROS. You can find our open-source Robonomics packages for ROS on GitHub, and here are some of them:") }}</p>

        </CaseText>

        <div class="layout__text mb-big">
          <div class="case-ros__gird">
            <div class="case-ros__grid-item">
              <CaseGithubItem  link="https://github.com/airalab/robonomics_comm" linkText="robonomics_comm" :text="$t('Robonomics communication stack contains a set of ROS packages for economical communication purposes.')"/>
            </div>
            <div class="case-ros__grid-item">
              <CaseGithubItem  link="https://github.com/airalab/autonomous_agent_template" linkText="autonomous_agent_template"/>
              <CaseGithubItem  link="https://github.com/airalab/robot_painter" linkText="robot_painter"/>
              <CaseGithubItem  link="https://github.com/DAO-IPCI/offsetting_agent" linkText="offsetting_agent"/>
            </div>
          </div>
        </div>

        <CaseText
          :title="$t(`Robonomics' contribution in the ROS 2 community`)"
          multiple
        >
          <p>{{ $t("Robonomics combines Robotics with Web3 technologies, and we aim to grow in these areas. Since the introduction of ROS 2, we've identified three main challenges that involve supporting the ROS 2 community and improving the capabilities of Robonomics:") }}</p>

          <ul class="list-simple cases__list cases__list--with-tick">
            <li class="cases__item cases__item--with-tick"> <b>{{ $t('Creating ROS 2 tools for Rust:') }}</b> {{ $t('These tools empower developers to write ROS 2 applications using Rust. To discover more about why we chose Rust and the significance of this project for us, you can find') }} <g-link target="_blank" to="/blog/ros-2-rust-report-2022/">{{ $t('additional details') }}</g-link></li>
            <li class="cases__item cases__item--with-tick"><b>{{$t('Developing Robonomics Middleware for ROS 2:')}}</b> {{ $t('This plays an important role in ensuring seamless integration of Robonomics into various multi-agent robotics systems using ROS 2. It can facilitate the integration of robots into Web 3 blockchain technologies while also reducing errors during the integration process, thereby saving both time and costs.') }}</li>
            <li class="cases__item cases__item--with-tick"><b>{{ $t('Creating a robotics lab with ROS 2:') }}</b> {{$t("As ROS 2 gains popularity in the robotics community, we're eager to see more robots and hardware working with ROS 2. Our goal is to connect them to the Web3 ecosystem using Robonomics.")}}</li>
          </ul>
        </CaseText>

      </section>
    </section>

    <Footer 
      isProgress
    />

  </layout>
</template>

<script>
export default {

  components: {
    CaseText: () => import('~/components/case/CaseText.vue'),
    Header: () => import('~/components/case/CaseHeader.vue'),
    Footer: () => import('~/components/case/CaseFooter.vue'),
    CaseGithubItem: () => import('~/components/case/CaseGithubItem.vue'),
  }

}
</script>

<style scoped>

  .mb-small {
    margin-bottom: var(--space);
  }

  .mb-big {
    margin-bottom: calc(var(--space)* 3);
  }

  .case-ros__extra {
    padding: calc(var(--space) * 0.5);
    margin-bottom: var(--space);
    border: 1px solid var(--color-dark);
  }

  .case-ros__extra b {
    display: block;
    margin-bottom: calc(var(--space) * 0.5)
  }

  .case-ros__extra p {
    margin-bottom: 0;
  }

  .case-ros__images {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .case-ros__images img {
    display: block;
    max-width: 222px;
    width: 100%;
    min-width: 50px;
  }

  .case-ros__images a:not(:last-of-type) {
    margin-right: calc(var(--space) * 1.5);
  }

  .case-ros__gird {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space);
  }

  @media screen and (max-width: 750px) {
    .case-ros__gird {
      grid-template-columns: 1fr;
    }

    .case-ros__images  {
      flex-wrap: wrap;
    }

    .case-ros__images img:not(:last-of-type) {
      margin: 0 auto;
    }
    
  }

  /* dark-theme */

  .dark-theme .case-ros__images .invert {
    filter: invert(1);
  }

</style>
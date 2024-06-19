<script setup>
import flutter from "~/assets/icon/flutter.png";

useHead({
  script: [
    {
      src: "https://kit.fontawesome.com/a24ff9630f.js",
      tagPosition: "bodyClose",
    },
  ],
});
const details = useDetails();
</script>
<template>
  <main>
    <div class="left">
      <div class="top">
        <div class="name">{{ details.name }}</div>
        <div class="role">{{ details.role }}</div>
      </div>
      <div class="bottom">
        <div class="all">
          <div class="heading">
            <i class="fas fa-fw fa-user-circle"></i> Contact
          </div>
          <div class="group">
            <div class="title">Phone</div>
            <a :href="'tel:' + details.tel" class="subtitle">{{
              details.tel
            }}</a>
          </div>
          <div class="group">
            <div class="title">Email</div>
            <a :href="'mailto:' + details.email" class="subtitle">{{
              details.email
            }}</a>
          </div>
          <div class="group">
            <div class="title">Address</div>
            <div class="subtitle">{{ details.address }}</div>
          </div>
          <div
            class="group"
            v-for="(link, index) in details.links"
            :key="index"
          >
            <div class="title">{{ index }}</div>
            <a :href="link" class="subtitle">{{ link }}</a>
          </div>
        </div>
        <div class="all">
          <div class="heading">
            <i class="fas fa-fw fa-book-open"></i> Education
          </div>
          <div
            class="group"
            v-for="(course, index) in details.education"
            :key="index"
          >
            <div class="title">
              {{ new Date(course.start_date).getFullYear() }} -
              {{ new Date(course.end_date).getFullYear() || "Present" }}
            </div>
            <div class="title">{{ course.course }}</div>
            <div class="subtitle">{{ course.university }}</div>
          </div>
        </div>
        <div class="all">
          <div class="heading">
            <i class="fas fa-fw fa-earth-asia"></i> language
          </div>
          <ul type="circle">
            <li v-for="(lang, index) in details.languages" :key="index">
              {{ lang }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="all">
        <div class="heading">
          <i class="fas fa-fw fa-user-circle"></i> Profile info
        </div>
        <div class="desc">{{ details.summary }}</div>
      </div>
      <div class="all">
        <div class="heading">
          <i class="fas fa-fw fa-briefcase"></i> work experience
        </div>

        <div class="desc">
          <div
            class="group"
            v-for="(project, index) in details.experience"
            :key="index"
          >
            <div class="title">{{ project.title }}</div>
            <div class="font-medium tracking-wide text-sm">
              {{ new Date(project.start_date).getFullYear() }} -
              {{ new Date(project.end_date).getFullYear() || "Present" }}
            </div>
            <div
              class="subtitle whitespace-pre-wrap"
              v-text="project.description"
            ></div>
          </div>
        </div>
      </div>
      <div class="all">
        <div class="heading">
          <i class="fas fa-fw fa-chart-pie"></i> My Skills & expertise
        </div>
        <div class="row">
          <ul class="skills">
            <li v-for="(skill, index) in details.skills" :key="index">
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
      <!-- <div class="all">
                <div class="heading">
                    <i class="fas fa-fw fa-address-book fa-flip-horizontal"></i> References
                </div>
                <div class="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ipsa dolore nemo sit autem
                    velit debitis, adipisci vel! Quisquam natus quod illo voluptate. Laudantium provident laborum, sed odio
                    non velit unde sequi autem itaque maiores maxime perferendis ex voluptas asperiores.</div>
            </div> -->
    </div>
  </main>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Concert+One&display=swap");

$blue: rgb(108, 182, 255);
$black: #333;

::-webkit-scrollbar {
  display: none;
}

.desc {
  color: #555;
}

* {
  font-family: "concert one", sans-serif;
}

main {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 380px auto;
}
a {
  text-decoration: none;
  color: inherit;
  text-transform: lowercase;
}
.left {
  display: grid;
  grid-template-rows: max-content auto;
}
.myImage {
  width: 250px;
  border-radius: 50%;
}
.top {
  background-color: $blue;
  padding: 48px 0;
  display: grid;
  gap: 10px;
  place-items: center;
  text-transform: uppercase;
}
.top .name {
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 2px;
}
.top .role {
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: bold;
}
.left .bottom {
  background-color: #333;
  padding: 52px;
  display: grid;
  gap: 50px;
}

.heading {
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  font-size: 28px;
  letter-spacing: 2px;
  padding-bottom: 6px;
  border-bottom: 3px solid #fff;
  margin-bottom: 8px;
}
.heading .fa-fw {
  color: $blue;
  margin-right: 12px;
}
.all {
  display: grid;
  gap: 30px;
}
.group {
  display: grid;
  row-gap: 4px;
  color: #fff;
  text-transform: capitalize;
}
.group .icon {
  font-size: 24px;
  grid-row: 1/3;
  padding-top: 5px;
  color: inherit;
}
.group .title {
  font-weight: bold;
  letter-spacing: 1px;
}

.right .group {
  color: #555;
}

.group .subtitle {
  color: #888;
  font-size: 14px;
}

.right {
  background-color: whitesmoke;
  padding: 48px;
  display: grid;
  gap: 48px;
  align-content: baseline;
}

ul {
  color: #888;
  list-style: disc;
  list-style-position: inside;
  width: 100%;
  text-transform: capitalize;
}

ul.skills {
  column-count: 3;
}

.right .heading {
  color: var(--black);
  border-color: var(--black);
}

.right .row {
  display: flex;
  justify-content: space-between;
}

.subtitle ul {
  padding-left: 16px;
  margin-top: 4px;
}

.subtitle ul li {
  margin-bottom: 0px;
  row-gap: 8px;
}

.right .group {
  margin-bottom: 16px;
  text-transform: none;
}
</style>

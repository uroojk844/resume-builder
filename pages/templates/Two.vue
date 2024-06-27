<script setup>
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
  <main class="template">
    <div class="left">
      <div class="top">
        <div class="name">{{ details.name }}</div>
        <div v-if="details?.role" class="role">{{ details.role }}</div>
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
            <div class="subtitle">
              {{ getDate(course.start_date) }}
              -
              {{ getDate(course.end_date) }}
            </div>
            <div class="title">{{ course.course }}</div>
            <div class="subtitle">{{ course.university }}</div>
          </div>
        </div>
        <div class="all" v-if="details.languages.length">
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
            <div
              v-if="project.start_date"
              class="font-medium tracking-wide text-sm"
            >
              {{ getDate(project.start_date) }} -
              {{ getDate(project.end_date) }}
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

$black: #333;
$big-text: clamp(10px, 10px + 1vw, 2vw);
$small-text: min(2vw, 15px);

::-webkit-scrollbar {
  display: none;
}

.desc {
  color: #555;
  font-size: $small-text;
}

* {
  font-family: "Roboto", sans-serif;
}

main {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
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
  padding-top: 4.5vw;
  display: grid;
  gap: 1vw;
  place-items: center;
  text-transform: uppercase;
}
.top .name {
  font-size: clamp(10px, 10px + 2vw, 36px);
  font-weight: bold;
  letter-spacing: 2px;
}
.top .role {
  font-size: $small-text;
  letter-spacing: 2px;
  font-weight: bold;
}
.left .bottom {
  padding: 6vw;
  display: grid;
  gap: min(2vw, 24px);
  align-content: start;
}

.heading {
  text-transform: uppercase;
  font-weight: bold;
  font-size: $big-text;
  letter-spacing: 2px;
  padding-bottom: 1vw;
  border-bottom: 3px solid;
  margin-bottom: 1vw;
}

.all {
  display: grid;
  gap: min(2vw, 24px);
  align-content: start;
}
.group {
  display: grid;
  row-gap: 0.5vw;
  text-transform: capitalize;
  align-content: start;
}
.group .icon {
  font-size: 3vw;
  grid-row: 1/3;
  padding-top: 5px;
  color: inherit;
}
.group .title {
  font-weight: bold;
  letter-spacing: 1px;
  font-size: $small-text;
}

.right .group {
  color: #555;
}

.group .subtitle {
  color: #888;
  font-size: $small-text;
}

.right {
  background-color: whitesmoke;
  padding: 6vw;
  display: grid;
  gap: 6vw;
  align-content: baseline;
}

ul {
  color: #888;
  list-style: disc;
  list-style-position: inside;
  width: 100%;
  text-transform: capitalize;
  font-size: $small-text;
}

ul.skills {
  column-count: 3;
}

.right .heading {
  color: $black;
  border-color: $black;
}

.right .row {
  display: flex;
  justify-content: space-between;
}

.subtitle ul {
  padding-left: 2vw;
  margin-top: 4px;
}

.subtitle ul li {
  margin-bottom: 0px;
  row-gap: 8px;
}

.right .group {
  margin-bottom: 2vw;
  text-transform: none;
}
</style>

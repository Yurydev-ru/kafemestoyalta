<script lang="ts" setup></script>

<template>
  <section class="hero-sections">
    <VideoBg />
    <div class="hero-sections_content">
      <div class="hero-sections_title">
        <span>кафе</span>
        <span>Место</span>
        <!-- <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quam
          nemo quis porro perspiciatis aliquid vero officiis reprehenderit eum
          fuga repudiandae atque modi, explicabo, labore eos tempora sapiente
          quia quo! Ipsa dolor voluptate necessitatibus labore suscipit esse
          rerum cum non, quisquam placeat et maiores enim quam corrupti cumque
          vero nobis a repellendus ea similique animi accusamus? Illum, vel
          corrupti! Porro saepe veritatis qui consectetur architecto doloremque
          ipsum sed ipsa nostrum ipsam minus odio in non deleniti voluptas at
          consequatur tempora error corporis ea nam necessitatibus, repellendus
          dolore! A iure eius blanditiis libero unde dolorem, laborum labore
          quod velit reprehenderit neque animi ducimus consequatur, veritatis
          voluptatum cum inventore, quae odit corrupti quia adipisci facere
          reiciendis obcaecati accusamus. Laborum illum rem et reprehenderit non
          dignissimos ducimus, nesciunt, totam veniam ex earum voluptate quae,
          ullam quam nam tenetur vel iusto fugit veritatis accusantium ipsam
          dolores quaerat cupiditate dolorem. Atque quaerat officiis explicabo
          porro unde dolorem consequatur, natus praesentium ad non sequi rerum
          recusandae voluptatibus laudantium, exercitationem quam, suscipit
          eveniet dicta neque doloremque nemo cumque. Autem suscipit debitis,
          quasi aliquid incidunt vero laboriosam, et saepe, ea necessitatibus
          repellendus voluptate libero! Placeat tempora unde laudantium et
          repellat sunt, provident ullam, veritatis ea cumque veniam
          reprehenderit.
        </p> -->
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        adipisci.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-sections {
  position: relative;
  min-height: 100vh;
  z-index: 1;
  isolation: isolate;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-sections_content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.hero-sections_title {
  color: #ffffff;
  display: flex;
  flex-direction: column;
}

.hero-sections_title span {
  font-size: 18px;
}

.hero-sections_title span + span {
  font-size: 24px;
}
</style>

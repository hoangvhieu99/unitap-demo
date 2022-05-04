<!-- Please remove this file from your project -->
<template>
  <div class="bg-background mt-px">
    <div class="container font-body">
      <div class="font-bold text-primary-200 text-tt flex justify-center">
        <h2 class="mt-16 mb-4">Hơn 1 triệu người dùng trên Việt Nam</h2>
      </div>

      <div class="font-medium text-content text-d-m flex justify-center">
        <h2 class="mt-px mb-16">
          “Chúng tôi quan tâm đến khách hàng từ những điều nhỏ nhất” - Unitap.
        </h2>
      </div>

      <VueSlickCarousel v-bind="settings" class="carousel">
        <div class="px-3 pb-16">
          <div class="bg-white-1 shadow-social rounded-3xl p-14">
            <div class="text-black-1 text-icon font-medium mb-10">“</div>
            <div class="mb-14 text-soci font-medium text-black-3 mt-0.5">
              Dùng thẻ Unitap rất an toàn,<br />
              nhanh chóng tiện lợi, nên<br />
              xài thử.
            </div>
            <div class="mt-1 inline-flex gap-x-36">
              <div>
                <div class="flex">
                  <div class="text-blue-2 mr-2">@</div>
                  <div class="font-medium text-dm text-black-3">Ly Lê</div>
                </div>
                <div class="text-mn text-vnd font-medium">Verified artist</div>
              </div>
              <div>
                <img
                  src="../images/icons/check-icon.svg"
                  class="absolute z-10 mx-8"
                />
                <img src="../images/icons/user.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="px-3">
          <div class="bg-white-1 shadow-social rounded-3xl p-14">
            <div class="text-black-1 text-icon font-medium mb-10">“</div>
            <div class="mb-14 text-soci font-medium text-black-3 mt-0.5">
              Dùng thẻ Unitap rất an toàn,<br />
              nhanh chóng tiện lợi, nên<br />
              xài thử.
            </div>
            <div class="mt-1 inline-flex gap-x-36">
              <div>
                <div class="flex">
                  <div class="text-blue-2 mr-2">@</div>
                  <div class="font-medium text-dm text-black-3">Ly Lê</div>
                </div>
                <div class="text-mn text-vnd font-medium">Verified artist</div>
              </div>
              <div>
                <img
                  src="../images/icons/check-icon.svg"
                  class="absolute z-10 mx-8"
                />
                <img src="../images/icons/user.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="px-3">
          <div class="bg-white-1 shadow-social rounded-3xl p-14">
            <div class="text-black-1 text-icon font-medium mb-10">“</div>
            <div class="mb-14 text-soci font-medium text-black-3 mt-0.5">
              Dùng thẻ Unitap rất an toàn,<br />
              nhanh chóng tiện lợi, nên<br />
              xài thử.
            </div>
            <div class="mt-1 inline-flex gap-x-36">
              <div>
                <div class="flex">
                  <div class="text-blue-2 mr-2">@</div>
                  <div class="font-medium text-dm text-black-3">Ly Lê</div>
                </div>
                <div class="text-mn text-vnd font-medium">Verified artist</div>
              </div>
              <div>
                <img
                  src="../images/icons/check-icon.svg"
                  class="absolute z-10 mx-8"
                />
                <img src="../images/icons/user.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="px-3">
          <div class="bg-white-1 shadow-social rounded-3xl p-14">
            <div class="text-black-1 text-icon font-medium mb-10">“</div>
            <div class="mb-14 text-soci font-medium text-black-3 mt-0.5">
              Dùng thẻ Unitap rất an toàn,<br />
              nhanh chóng tiện lợi, nên<br />
              xài thử.
            </div>
            <div class="mt-1 inline-flex gap-x-36">
              <div>
                <div class="flex">
                  <div class="text-blue-2 mr-2">@</div>
                  <div class="font-medium text-dm text-black-3">Ly Lê</div>
                </div>
                <div class="text-mn text-vnd font-medium">Verified artist</div>
              </div>
              <div>
                <img
                  src="../images/icons/check-icon.svg"
                  class="absolute z-10 mx-8"
                />
                <img src="../images/icons/user.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: {
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 3,
        dots: true,
        // mất 2 nút pre next
        arrows: false,
      },
    }
  },
}
</script>




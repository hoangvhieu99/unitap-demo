<!-- Please remove this file from your project -->
<template>
  <div class="container font-body iteams-center">
    <div class="grid grid-cols-2">
      <div class="mt-36">
        <div class="flex justify-center gap-x-4">
          <img src="../images/icons/previos.svg">
          <img src="../images/icons/card.svg">
          <img src="../images/icons/next.svg">
        </div>
        <span class="mt-2 mb-1 flex justify-center">
          <img src="../images/icons/shadow.svg" alt="">
        </span>
        <div class="mt-16 mb-4 flex justify-center gap-x-8">
          <span>
            <img src="../images/icons/card-front.svg" alt="">
          </span>
          <span>
            <img src="../images/icons/card-front.svg" alt="">
          </span>
        </div>
        <div class="mt-0.5 flex justify-center gap-x-24">
          <span>Mặt trước</span>
          <span>Mặt sau</span>
        </div>
      </div>
      <div class="mt-16 ">
        <h2 class="mb-12 text-tt font-bold text-primary-200">
         ĐẶT MUA THẺ UNITAP
        </h2>
        <div class="font-semibold text-black-3 mb-6 text-or">
          Chọn loại thẻ
        </div>
        <div class="grid grid-cols-3">
            <div class="group cursor-default">
              <input class="radioclass" id="id_radiobtn1" type="radio" name="group1" value="2"/>
              <div class="content mb-0.5">
                  <label for="id_radiobtn1" class="item flex items-center cursor-pointer">
                      <span class="title font-semibold ml-2.5 text-radio group-hover:text-primary-200">
                          Basic
                      </span>
                      <span class="discount group-hover:bg-red pointer-events-none border bg-red05 text-white-1 px-1 py-0.5 ml-3 rounded text-discount font-bold">
                          -40%
                      </span>
                  </label>
              </div>
               
              <div class="content mt-4 ">
                <span class="price text-money font-bold text-primary-300 group-hover:text-primary-200">159.000 VNĐ</span>
              </div>

              <div class="content mb-2.5">
                <span class="text-mn mb-3.5 text-vnd05 font-bold line-through group-hover:text-vnd">259.000 VNĐ</span>
              </div>

                <div class="content flex items-center gap-x-2 mt-0.5 mb-6 ">
                  <span class="dot bg-primary-300 group-hover:bg-primary-200"></span>
                  <span class="text-primary-300 text-ordct group-hover:text-primary-200">
                    Thẻ định danh
                  </span>
                </div>
            </div>
            
            <div class="group cursor-default">
              <input class="radioclass" id="id_radiobtn2" type="radio" name="group1" value="2"/>
              <div class="content mb-0.5">
                  <label for="id_radiobtn2" class="item flex items-center cursor-pointer">
                      <span class="title font-semibold ml-2.5 text-radio group-hover:text-primary-200">
                         Standard
                      </span>
                      <span class="discount group-hover:bg-red pointer-events-none border bg-red05 text-white-1 px-1 py-0.5 ml-3 rounded text-discount font-bold">
                          -15%
                      </span>
                  </label>
              </div>
               
              <div class="content mt-4 ">
                <span class="price text-money font-bold text-primary-300 group-hover:text-primary-200">259.000 VNĐ</span>
              </div>

              <div class="content mb-2.5">
                <span class="text-mn mb-3.5 text-vnd05 font-bold line-through group-hover:text-vnd">259.000 VNĐ</span>
              </div>

                <div class="content flex items-center gap-x-2 mt-0.5 mb-6 ">
                  <span class="dot bg-primary-300 group-hover:bg-primary-200"></span>
                  <span class="text-primary-300 text-ordct group-hover:text-primary-200">
                    Thẻ định danh
                  </span>
                </div>
            </div>

            <div class="group cursor-default">
              <input class="radioclass" id="id_radiobtn3" type="radio" name="group1" value="2"/>
              <div class="content mb-0.5 ">
                  <label for="id_radiobtn3" class="item flex items-center cursor-pointer">
                      <span class="title font-semibold ml-2.5 text-radio group-hover:text-primary-200">
                          Premium
                      </span>
                      <span class="discount group-hover:bg-red pointer-events-none border bg-red05 text-white-1 px-1 py-0.5 ml-3 rounded text-discount font-bold">
                          -30%
                      </span>
                  </label>
              </div>
               
              <div class="content mt-4 ">
                <span class="price text-money font-bold text-primary-300 group-hover:text-primary-200">359.000 VNĐ</span>
              </div>

              <div class="content mb-2.5">
                <span class="text-mn mb-3.5 text-vnd05 font-bold line-through group-hover:text-vnd">438.000 VNĐ</span>
              </div>

                <div class="content flex items-center gap-x-2 mt-0.5 mb-6 ">
                  <span class="dot bg-primary-300 group-hover:bg-primary-200"></span>
                  <span class="text-primary-300 text-ordct group-hover:text-primary-200">
                    Thẻ định danh
                  </span>
                </div>
            </div>
        </div>

        <!-- Gạch ngang -->
        <div class="border mb-6 border-white-4"></div>
        
        <div class="flex items-center gap-x-6">
          <div class="font-normal text-or">Chọn màu sắc</div>
          <div class="font-bold text-or order__colors">Gradient</div>
        </div>

        <div class="flex items-center gap-x-6 mb-3">
          <div class="mt-6 hover:mt-3 cursor-pointer">
            <img src="../images/icons/hexagon-se.svg" alt="">
          </div>
          <div class="mt-6 hover:mt-3 cursor-pointer">
            <img src="../images/icons/hexagon-blue.svg" alt="">
          </div>
          <div class="mt-6 hover:mt-3 cursor-pointer">
            <img src="../images/icons/hexagon-wh.svg" alt="">
          </div>
          <div class="mt-6 hover:mt-3 cursor-pointer">
            <img src="../images/icons/hexagon-bl.svg" alt="">
          </div>
          <div class="mt-6 hover:mt-3 cursor-pointer">
            <img src="../images/icons/hexagon-es.svg" alt="">
          </div>
          <!-- <a href="#" class="bg-secondry hexagon shadow-hexagon"></a> -->
          <!-- <a href="#" class="bg-blue-1 hexagon shadow-hexagon"></a>
          <a href="#" class="bg-white-1 border border-blue hexagon shadow-hexagon"></a>
          <a href="#" class="bg-black-2 hexagon shadow-hexagon"></a>
          <a href="#" class="hexagon-es shadow-hexagon"></a> -->
        </div>

        <div class="border mb-6 border-white-4"></div>

        <div class="font-semibold text-or text-black-3">
          Nhập tên của bạn
        </div>
        <div class="mt-3">
          <label class="block">
            <input type="usename" name="usename" class="mt-1 px-3 py-2 bg-white border shadow-sm border-frame placeholder-slate-400 placeholder:italic focus:outline-none focus:border-secondry focus:ring-secondry block w-full rounded-lg focus:ring-1" placeholder="Họ và Tên..." />
            <p class="mt-2 text-black-4 text-mn">
              Nhập tối đa 24 kí tự
            </p>
          </label>
        </div>
        <div class="mt-6 mb-16">
           <a href="#" class="text-white-1 text-d-m font-bold border rounded-lg py-3 px-11 bg-blue-2">
            ĐẶT MUA NGAY
          </a>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'OrderSlide',
}
</script>

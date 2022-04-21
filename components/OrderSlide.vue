<!-- Please remove this file from your project -->
<template>
  <div class="container font-body iteams-center">
    <div class="grid grid-cols-2">
      <div>
        <img src="">
      </div>
      <div class="mt-16 ">
        <h2 class="mb-12 text-tt font-bold text-primary-200">
         ĐẶT MUA THẺ UNITAP
        </h2>
        <div class="font-semibold text-black-3 mb-6 text-or">
          Chọn loại thẻ
        </div>
        <div class="grid grid-cols-3">
            <div>
              <label class="custom-radio-btn mb-4">
                <span class="label font-semibold ml-2.5 text-radio">Basic</span>
                <input type="radio" name="sample" checked>
                <span class="pointer-events-none border bg-red05 text-white px-1 py-0.5 ml-3 rounded text-discount font-bold">-40%</span>
                <span class="checkmark"></span>
              </label>

              <div class="text-money font-bold text-primary-300">
                159.000 VNĐ
              </div>

              <div class="text-mn mb-3.5 text-vnd05 font-bold line-through ">
                259.000 VNĐ
              </div>

              <div class="flex items-center gap-x-2 mt-px mb-6">
                <span class="dot bg-primary-300"></span>
                <p class="text-primary-300 text-ordct ">
                  Thẻ định danh
                </p>
              </div>
            </div>
            <div>
              <label class="custom-radio-btn left mb-4">
                <span class="label font-semibold ml-2.5 text-radio">Standard</span>
                <span class="pointer-events-none border bg-red05 text-white px-1 py-0.5 ml-3 rounded text-discount font-bold">-15%</span>
                <input type="radio" name="sample">
                <span class="checkmark"></span>
              </label>
               <div class="text-money font-bold text-primary-300">
                259.000 VNĐ
              </div>

              <div class="text-mn mb-3.5 text-vnd05 font-bold line-through ">
                259.000 VNĐ
              </div>

              <div class="flex items-center gap-x-2 mt-px mb-6">
                <span class="dot bg-primary-300"></span>
                <p class="text-primary-300 text-ordct ">
                  Thẻ định danh
                </p>
              </div>
            </div>
            <div>
              <label class="custom-radio-btn mb-4">
                <span class="label font-semibold ml-2.5 text-radio">Premium</span>
                <span class="pointer-events-none border bg-red05 text-white px-1 py-0.5 ml-3 rounded text-discount font-bold">-30%</span>
                <input type="radio" name="sample" checked>
                <span class="checkmark"></span>
              </label>
               <div class="text-money font-bold text-primary-300">
                359.000 VNĐ
              </div>

              <div class="text-mn mb-3.5 text-vnd05 font-bold line-through ">
                438.000 VNĐ
              </div>

              <div class="flex items-center gap-x-2 mt-px mb-6">
                <span class="dot bg-primary-300"></span>
                <p class="text-primary-300 text-ordct ">
                  Thẻ định danh
                </p>
              </div>
            </div>
        </div>

        <!-- Gạch ngang -->
        <div class="border mb-6 border-gray-100"></div>
        
        <div class="flex items-center gap-x-6 mb-7">
          <div class="font-normal text-or">Chọn màu sắc</div>
          <div class="font-bold text-or order__colors">Gradient</div>
        </div>

        <div class="flex items-center gap-x-6 mb-7">
          <a href="#" class="bg-secondry hexagon shadow-hexagon"></a>
          <a href="#" class="bg-blue hexagon shadow-hexagon"></a>
          <a href="#" class="bg-white border border-blue hexagon shadow-hexagon"></a>
          <a href="#" class="bg-black-2 hexagon shadow-hexagon"></a>
          <a href="#" class="hexagon-es shadow-hexagon"></a>
        </div>

        <div class="border mb-6 border-gray-100"></div>

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
           <a href="#" class="text-white text-d-m font-bold border rounded-lg py-3 px-11 bg-blue-2">
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

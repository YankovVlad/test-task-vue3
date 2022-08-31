<template>
  <!-- compressed -->
  <svg
    width="30"
    height="30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="30"
      height="30"
      rx="2"
      fill="#05A3AD"
    />
    <g
      clip-path="url(#a)"
      stroke="#fff"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M9 15h12M15 21V9" />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="#fff"
          transform="translate(3 3)"
          d="M0 0h24v24H0z"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
export default {
  name: "IconPlus",
};
</script>

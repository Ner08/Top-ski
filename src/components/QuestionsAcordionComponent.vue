<template>
    <!-- Question Accordion -->
    <section id="questions" class="my-3 p-5">
        <div class="container">
            <h2 class="text-center md-4">{{$t("FrequentQuestions")}}</h2>
            <div class="accordion accordion-flush" id="questions">
                <!-- Item 1 -->
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#question-one">
                            {{$t("question1")}}
                        </button>
                    </h2>
                    <div id="question-one" class="accordion-collapse collapse" data-bs-parent="#questions">
                        <div class="accordion-body">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Doloremque quo eius cum assumenda aliquid vero ipsa quis
                            praesentium vel rem soluta natus delectus recusandae laborum
                            voluptates, libero nihil eaque porro corporis fuga aut quos
                            velit harum qui. A, itaque praesentium! Corporis consectetur
                            nostrum accusamus iste repudiandae consequuntur pariatur magni?
                            Quaerat!
                        </div>
                    </div>
                </div>
                <!-- Item 2 -->
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#question-two">
                            {{$t("question2")}}
                        </button>
                    </h2>
                    <div id="question-two" class="accordion-collapse collapse" data-bs-parent="#questions">
                        <div class="accordion-body">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Doloremque quo eius cum assumenda aliquid vero ipsa quis
                            praesentium vel rem soluta natus delectus recusandae laborum
                            voluptates, libero nihil eaque porro corporis fuga aut quos
                            velit harum qui. A, itaque praesentium! Corporis consectetur
                            nostrum accusamus iste repudiandae consequuntur pariatur magni?
                            Quaerat!
                        </div>
                    </div>
                </div>
                <!-- Item 3 -->
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#question-three">
                            {{$t("question3")}}
                        </button>
                    </h2>
                    <div id="question-three" class="accordion-collapse collapse" data-bs-parent="#questions">
                        <div class="accordion-body">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Doloremque quo eius cum assumenda aliquid vero ipsa quis
                            praesentium vel rem soluta natus delectus recusandae laborum
                            voluptates, libero nihil eaque porro corporis fuga aut quos
                            velit harum qui. A, itaque praesentium! Corporis consectetur
                            nostrum accusamus iste repudiandae consequuntur pariatur magni?
                            Quaerat!
                        </div>
                    </div>
                </div>
                <!-- Item 4 -->
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#question-four">
                            {{$t("question4")}}
                        </button>
                    </h2>
                    <div id="question-four" class="accordion-collapse collapse" data-bs-parent="#questions">
                        <div class="accordion-body">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Doloremque quo eius cum assumenda aliquid vero ipsa quis
                            praesentium vel rem soluta natus delectus recusandae laborum
                            voluptates, libero nihil eaque porro corporis fuga aut quos
                            velit harum qui. A, itaque praesentium! Corporis consectetur
                            nostrum accusamus iste repudiandae consequuntur pariatur magni?
                            Quaerat!
                        </div>
                    </div>
                </div>
                <!-- Item 5 -->
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#question-five">
                            {{$t("question5")}}
                        </button>
                    </h2>
                    <div id="question-five" class="accordion-collapse collapse" data-bs-parent="#questions">
                        <div class="accordion-body">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Doloremque quo eius cum assumenda aliquid vero ipsa quis
                            praesentium vel rem soluta natus delectus recusandae laborum
                            voluptates, libero nihil eaque porro corporis fuga aut quos
                            velit harum qui. A, itaque praesentium! Corporis consectetur
                            nostrum accusamus iste repudiandae consequuntur pariatur magni?
                            Quaerat!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
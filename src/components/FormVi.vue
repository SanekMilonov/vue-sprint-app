<template>
	<div class="container messagety">
		<div class="row">
			<div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"
				class="aos-init col-md-6 aos-animate" style="
    display: flex;
    justify-content: center;margin-top: 10%;
">
				<div id="prim">
					<div class="octagon d0"></div>
					<div class="octagon d45"></div>
					<div class="octagon d90"></div>
					<div class="octagon d135"></div>
					<font-awesome-icon icon="fa-regular fa-envelope" style="color: #ffffff" />
				</div>
				<h2 style="margin-top: 30%;color:#fff;">Остались вопросы? Или хотите оставить отзыв. Заполните форму
				</h2>
			</div>
			<div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"
				class="aos-init col-md-6 aos-animate">

				<div class="wpcf7 js" id="wpcf7-f178-o1" lang="ru-RU" dir="ltr">
					<form action="/#wpcf7-f178-o1" method="post" class="wpcf7-form init" aria-label="Контактная форма"
						novalidate="novalidate" data-status="init">
						<h3>Тема письма:
						</h3>
						<p><label class="wot"><span class="wpcf7-form-control-wrap" data-name="menu-829">
									<select v-model="selected">
										<option disabled value="">—Выберите вариант—</option>
										<option value="Вопрос">Вопрос</option>
										<option value="Отзыв">Отзыв</option>
										<option value="Сотрудничество">Сотрудничество</option>
									</select></span></label>
						</p>
						<h3>Ваше имя:
						</h3>
						<p><label><span class="wpcf7-form-control-wrap" data-name="text-466">
									<input v-model="name" size="40" type="text"></span></label>
						</p>
						<h3>Ваш email:
						</h3>
						<p><label><span class="wpcf7-form-control-wrap" data-name="email-407">
									<input v-model="email" size="40" type="email"></span></label>
						</p>
						<h3>Ваше сообщение:
						</h3>
						<p><label><span class="wpcf7-form-control-wrap" data-name="your-message">
									<textarea v-model="yourmessage"></textarea></span></label><br>
							<input class="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value="Отправить"><span
								class="wpcf7-spinner"></span>
						</p>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FormVue'
}
</script>
<style scoped>
.messagety {
	padding: 0px;
	margin: 0px;
	display: flex;
	padding: 30px 0px;
	width: 80%;
	margin: auto;
	align-items: center;
}

.messagety #prim {
	display: flex;
	justify-content: center;
	align-items: center;
}

.messagety #prim {
	width: 140px;
	height: 60px;
	position: absolute;
}

.octagon {
	width: 140px;
	height: 60px;
	position: absolute;
}

.messagety #prim .d135,
.messagety #prim .d45,
.messagety #prim .d90,
.messagety #prim .d0 {
	border: 1px solid #fff;
	border-top: 0;
	border-bottom: 0;
}

.messagety #prim .d45 {
	transform: rotate(45deg);
}

.messagety #prim .d90 {
	transform: rotate(90deg);
}

.messagety #prim .d135 {
	transform: rotate(135deg);
}

.messagety #prim svg {
	width: 50px;
	height: 50px;
	position: absolute;
}

.messagety h2 {
	margin-top: 150px;
	color: #fff;
	text-align: center;
}

textarea,
input {
	background: #525151;
	border: 1px solid #afafaf;
	color: #AFAFAF;
	height: 3.1875rem;
	line-height: 3.1875rem;
	padding: 0 0.9375rem;
	width: 100%;
	-webkit-appearance: none;
	border-radius: 5px;
}

.messagety form {
	background: #ffffff29;
	width: 70%;
	padding: 20px;
	border-radius: 20px;
	backdrop-filter: blur(2px);
	margin: auto;
}

.messagety form div {
	width: 100%;
}

.messagety form.otxivforms {
	display: flex;
	align-content: space-around;
	flex-direction: column;
	align-items: center;
}

.messagety form h3 {
	color: #02b1dc;
	text-shadow: 0 0 10px #01b0db, 0 0 20px #01b0db, 0 0 30px #01b0db, 0 0 40px #01b0db;
	margin-bottom: 15px;
	margin-top: 15px;
}

.messagety form select {
	width: 100%;
	max-width: 100%;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	padding: 14px 15px;
	font-size: 14px;
	line-height: 18px;
	color: rgba(251, 251, 255, 0.8);
	cursor: pointer;
	background: #525151;
}

.messagety form select:focus-visible {
	border: 1px solid #0cf;
}

.messagety form textarea,
.messagety form input {
	background: #525151;
	border: 1px solid #afafaf;
	color: #AFAFAF;
	height: 3.1875rem;
	padding: 0 0.9375rem;
	width: 100%;
	--webkit-appearance: none;
	border-radius: 5px;
}

.messagety form textarea:focus,
.messagety form input:focus {
	border: 1px solid #0cf;
	outline: none;
}

.messagety form button {
	width: 60%;
	margin: 40px auto;
	display: block;
}

label {
	display: block;
}

@media (max-width: 1200px) {
	.messagety {
		width: 100%;
	}

	.messagety #prim {
		height: 190px;
	}

	.messagety h2 {
		margin-top: auto;
	}

	.messagety form {
		width: 100%;
	}
}
</style>
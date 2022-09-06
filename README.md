# React Redux Text Generator App

## Yayınlandı: https://delicate-heliotrope-bb67ca.netlify.app/

## Açılış ekranı
![textgenerator](https://user-images.githubusercontent.com/36435160/188698615-a7d2ff3e-ba5b-4898-94d6-8ab24b1e9a22.png)

## Paragraf sayısı ve html olma durumu state olarak belirlenmiştir. Axios aracılığıyla paragraf sayısı ve html olma durumu gönderilir ve gelen veriler dispatch aracılığıyla redux reducer ile karşılanır. Redux tarafından gelen veri useSelector kullanılarak alınmıştır. Dropdown değişince içindeki veri handleChangeDropdown ile state içerisine kaydedilir.
![textgenerator1](https://user-images.githubusercontent.com/36435160/188699505-193783cb-c9b0-4814-8a6c-b7b4a6642ced.png)

## Paragraf sayısı setChangeRandomParas ile state içerisine değiştiğinde onChange aracılığıyla kaydedilir. Dropdown html durumu tıklanınca onClick aracılığıyla state içerisine kaydedilir.
![textgenerator2](https://user-images.githubusercontent.com/36435160/188699847-54cb81c9-3708-4dba-8ff0-6945e79b6cfe.png)

## İlk veri boş belirlenmiştir fakat varsayılan paragraf değeri 4 olduğundan otomatik güncellenir. Paragraf verisi burada tutulur. Reducer changeParas axios ile gelen veriyi initial state içerisine kaydeder.
![textgenerator3](https://user-images.githubusercontent.com/36435160/188700156-79e8fbac-1010-4b0c-90db-a7f871ad50ad.png)

## Redux store
![textgenerator4](https://user-images.githubusercontent.com/36435160/188700244-b3636c5e-97a8-4301-bee3-1db702665600.png)

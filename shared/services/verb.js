import Client from "./instance";

export const getRequest = async (URL, params = {}, headers = {}) => {
    try {
      const response = await Client.get(URL, {
        params: params,
        headers: headers,
      });
      return response.data;
    } catch (error) {
      console.error("API çağrısı sırasında bir hata oluştu:", error.message);
      if (error.message) {
        console.error("Hata yanıtı: ", error.response.data);
        throw new Error(error.response.data.message || "Sunucuda bir hata oluştu");
      } else if (error.request) {
        console.error("Yanıt alınamadı:", error.request);
        throw new Error(
          "Sunucudan yanıt alınamadı. Lütfen internet bağlantınızı kontrol edin."
        );
      } else {
        console.error("İstek hazırlama hatası:", error.message);
        throw new Error("Bir sorun oluştu. Tekrar deneyin.");
      }
    }
  };
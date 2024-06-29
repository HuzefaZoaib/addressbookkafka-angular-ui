// environment.ts
export const environment = {
    production: false,
    START_KAFKA_INSTANCE_URL: 'https://dznqmg8kbe.execute-api.us-east-1.amazonaws.com/StartECKafkaInstance',
    CHECK_HEALTH_KAFKA_INSTANCE_URL: 'http://3.215.143.52:9000',
    KAFKA_INSTANCE_MONITORING_URL: 'http://3.215.143.52:9000',
    TRIGGER_DATA_INTO_KAFKA_INSTANCE_URL: 'http://localhost:8080/load',
    COSUMER_API_URL: 'http://localhost:8080/consume',
};
